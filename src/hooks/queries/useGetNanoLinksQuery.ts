import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useAuthorizedRequest } from '../useAuthorizedRequest';

type Link = {
  id: string;
  originalURL: string;
  nanoId: string;
  title: string;
  image: string | null;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
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

export function useGetNanoLinksQuery() {
  const authorizedRequest = useAuthorizedRequest();
  const { data, isLoading, error, isError } = useQuery<
    AxiosResponse<Link[]>,
    AxiosError<ServerErrorType>
  >({
    queryKey: ['nanolinks'],
    queryFn: () => authorizedRequest.get('/nanolinks'),
    staleTime: Infinity,
    retry: 0,
  });

  const responseData = data?.data;

  return { responseData, isLoading, error, isError };
}
