import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import decode from 'jwt-decode';

type UserDataType = {
  name: string;
  email: string;
  accessToken: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export function useAuthorizedRequest() {
  const queryClient = useQueryClient();

  const authorizedRequest = axios.create({
    baseURL: API_BASE_URL,
  });

  authorizedRequest.interceptors.request.use(
    async (req) => {
      const accessToken = queryClient.getQueryData<UserDataType>([
        'userData',
      ])?.accessToken;

      if (accessToken) {
        const { exp } = decode<{ exp: number }>(accessToken);

        if (exp * 1000 < Date.now()) {
          try {
            await queryClient.invalidateQueries({
              queryKey: ['userData'],
            });

            const newAccessToken = queryClient.getQueryData<UserDataType>([
              'userData',
            ])?.accessToken;

            req.headers.Authorization = `Bearer ${newAccessToken}`;
            return req;
          } catch (error) {
            return Promise.reject(error);
          }
        }
        req.headers.Authorization = `Bearer ${accessToken}`;
        return req;
      } else {
        return Promise.reject({
          messsage: 'Token não encontrado.',
          action: 'Faça login novamente.',
        });
      }
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return authorizedRequest;
}
