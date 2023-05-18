import { request } from '@/config/request';
import { useMutation, useQueryClient } from '@tanstack/react-query';
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
  action?: string;
  details?: {
    code: string;
    message: string;
    path: string[];
    validation: string;
  }[];
};

type SigninBodyType = {
  email: string;
  password: string;
};

export function useSigninMutation(signinBody: SigninBodyType) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { addUnauthorizedInterceptor } = useUnauthorizedInterceptor();

  const { mutate, isLoading, error, isError } = useMutation<
    UserDataType,
    ServerErrorType
  >({
    mutationFn: async () => {
      try {
        const response = await request.post<UserDataType>(
          '/auth/signin',
          signinBody,
          {
            withCredentials: true,
          }
        );
        return response.data;
      } catch (error) {
        if (error instanceof AxiosError) {
          return Promise.reject(error.response?.data);
        }
        return Promise.reject(error);
      }
    },
    onSuccess: (res) => {
      request.defaults.headers.Authorization = `Bearer ${res.accessToken}`;
      queryClient.setQueryData(['userData'], res);
      addUnauthorizedInterceptor();
      router.push('/nanolinks');
    },
  });

  return { mutate, isLoading, error, isError };
}
