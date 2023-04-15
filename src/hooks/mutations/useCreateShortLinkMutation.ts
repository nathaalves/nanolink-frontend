import { request } from '@/config/request';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse, AxiosError } from 'axios';

type ResponseDataType = {
  shortLink: string;
  url: string;
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

export function useCreateShortLinkMutation(originalURL: string) {
  const {
    data: response,
    mutate,
    isLoading,
    isSuccess,
    error,
    isError,
  } = useMutation<AxiosResponse<ResponseDataType>, AxiosError<ServerErrorType>>(
    {
      mutationFn: () =>
        request.post('/create', {
          url: originalURL,
        }),
    }
  );

  const data = response?.data;
  const errorData = error?.response?.data;

  return { data, mutate, isLoading, isSuccess, errorData, isError };
}
