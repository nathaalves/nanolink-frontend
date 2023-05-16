import { useQuery } from '@tanstack/react-query';
import { request } from '@/config/request';
import { AxiosError, AxiosResponse } from 'axios';

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
  const { data, isLoading, error, isError } = useQuery<
    AxiosResponse<Link[]>,
    AxiosError<ServerErrorType>
  >({
    queryKey: ['nanolinks'],
    queryFn: () => request.get('/nanolinks'),
    staleTime: Infinity,
    retry: 0,
  });

  const responseData = data?.data;

  return { responseData, isLoading, error, isError };
}
