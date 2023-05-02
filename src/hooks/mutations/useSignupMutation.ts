import { request } from '@/config/request';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse, AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

type ResponseDataType = {
  id: string;
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

type SignupBodyType = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export function useSignupMutation(signupBody: SignupBodyType) {
  const router = useRouter();

  const { mutate, isLoading, error, isError } = useMutation<
    AxiosResponse<ResponseDataType>,
    AxiosError<ServerErrorType>
  >({
    mutationFn: () => request.post('/auth/signup', signupBody),
    onSuccess: () => {
      router.push('/entrada');
    },
  });

  const errorData = error?.response?.data;

  return { mutate, isLoading, errorData, isError };
}
