import { useQueryClient } from '@tanstack/react-query';
import { request } from '@/config/request';

type UserDataType = {
  name: string;
  email: string;
  accessToken: string;
};

export function useUnauthorizedInterceptor() {
  const queryClient = useQueryClient();
  let interceptor: number | undefined;

  function addUnauthorizedInterceptor() {
    interceptor = request.interceptors.response.use(
      function (response) {
        return response;
      },
      async function (error) {
        if (error.response.status === 401) {
          try {
            await queryClient.invalidateQueries(['userData']);

            const accessToken = queryClient.getQueryData<UserDataType>([
              'userData',
            ])?.accessToken;

            const requestConfig = error.config;
            requestConfig.headers.Authorization = `Bearer ${accessToken}`;

            return request(requestConfig);
          } catch (error) {
            return Promise.reject(error);
          }
        }
        return Promise.reject(error);
      }
    );
  }

  function removeUnauthorizedInterceptor() {
    if (interceptor) {
      request.interceptors.response.eject(interceptor);
    }
  }

  return { addUnauthorizedInterceptor, removeUnauthorizedInterceptor };
}
