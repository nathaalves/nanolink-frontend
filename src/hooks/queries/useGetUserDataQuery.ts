import { request } from '@/config/request';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useUnauthorizedInterceptor } from '../interceptors/useUnauthorizedInterceptor';

type UserDataType = {
  name: string;
  email: string;
  accessToken: string;
};

type ServerErrorType = {
  message: string;
  action: string;
};

export function useGetUserDataQuery(initialData?: UserDataType) {
  const { addUnauthorizedInterceptor } = useUnauthorizedInterceptor();
  const router = useRouter();

  const { data, isSuccess } = useQuery<UserDataType, ServerErrorType>(
    ['userData'],
    async () => {
      try {
        const response = await request.get<UserDataType>('/auth/refresh', {
          withCredentials: true,
        });
        return response.data;
      } catch (error) {
        if (error instanceof AxiosError) {
          return Promise.reject(error.response?.data);
        }
        return Promise.reject(error);
      }
    },
    {
      onSuccess: (res) => {
        request.defaults.headers.Authorization = `Bearer ${res.accessToken}`;
        addUnauthorizedInterceptor();
      },
      onError: () => {
        router.push('/entrada');
      },
      retry: 0,
      staleTime: Infinity,
      initialData,
    }
  );

  return { data, isSuccess };
}
