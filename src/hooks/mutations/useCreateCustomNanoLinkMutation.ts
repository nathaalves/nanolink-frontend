'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse, AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useAuthorizedRequest } from '../useAuthorizedRequest';

type CreateCustomNanoLinkMutationData = {
  originalURL: string;
  image: string | null;
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
  const authorizedRequest = useAuthorizedRequest();
  const queryClient = useQueryClient();

  const { mutate, isLoading, error, isError } = useMutation<
    AxiosResponse,
    AxiosError<ServerErrorType>
  >({
    mutationFn: () => authorizedRequest.post('/nanolink/create-custom', data),
    onSuccess: () => {
      queryClient.invalidateQueries(['nanolinks']);
      router.push('/nanolinks');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const errorData = error?.response?.data;

  return { mutate, isLoading, errorData, isError };
}
