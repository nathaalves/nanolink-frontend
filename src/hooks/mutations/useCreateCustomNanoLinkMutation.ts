'use client';

import { request } from '@/config/request';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse, AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

type CreateCustomNanoLinkMutationData = {
  originalURL: string;
  title: string;
  nanoId: string;
};

type ServerErrorType = {
  message: string;
  details: {
    code: string;
    message: string;
    path: string[];
    validation: string;
  }[];
};

export function useCreateCustomNanoLinkMutation(
  data: CreateCustomNanoLinkMutationData
) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate, isLoading, error, isError } = useMutation<
    AxiosResponse,
    AxiosError<ServerErrorType>
  >({
    mutationFn: () => request.post('/nanolink/create-custom', data),
    onSuccess: () => {
      queryClient.invalidateQueries(['nanolinks']);
      router.push('/nanolinks');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { mutate, isLoading, error, isError };
}
