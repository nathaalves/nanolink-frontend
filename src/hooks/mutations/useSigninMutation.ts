import { request } from '@/config/request';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse, AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

type ResponseDataType = {
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

  const { mutate, isLoading, error, isError } = useMutation<
    AxiosResponse<ResponseDataType>,
    AxiosError<ServerErrorType>
  >({
    mutationFn: () => request.post('/auth/signin', signinBody),
    onSuccess: (res) => {
      request.defaults.headers.Authorization = `Bearer ${res?.data.accessToken}`;
      localStorage.setItem(
        'userData',
        JSON.stringify({ name: res?.data.name, email: res?.data.email })
      );
      router.push('/nanolinks');
    },
  });

  const errorData = error?.response?.data;
  return { mutate, isLoading, errorData, isError };
}
