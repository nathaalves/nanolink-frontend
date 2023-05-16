import { request } from '@/config/request';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse, AxiosError } from 'axios';

type ResponseDataType = {
  shortLink: string;
  originalURL: string;
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

export function useCreateShortLinkMutation(
  originalURL: string,
  setOriginalURL: (value: string) => void
) {
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
        request.post('/nanolink/create', {
          originalURL: originalURL.trim(),
        }),
      onSuccess: () => {
        setOriginalURL('');
      },
    }
  );

  const data = response?.data;
  const errorData = error?.response?.data;

  return { data, mutate, isLoading, isSuccess, errorData, isError };
}
