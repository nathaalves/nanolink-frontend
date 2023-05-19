import { request } from '@/config/request';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

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
