import { request } from '@/config/request';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

export function useSignoutMutation() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: async () => {
      try {
        await request.post(
          '/auth/signout',
          {},
          {
            withCredentials: true,
          }
        );
      } catch (error) {
        if (error instanceof AxiosError) {
          return Promise.reject(error.response?.data);
        }
        return Promise.reject(error);
      }
    },
    onSuccess: () => {
      queryClient.clear();
      router.push('/entrada');
    },
  });

  return { mutate };
}
