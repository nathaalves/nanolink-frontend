'use client';

import { Button } from '@/components/Button';
import { ErrorMessage } from '@/components/ErrorMessage';
import { Form } from '@/components/Form';
import { Input } from '@/components/Input';
import { useSigninMutation } from '@/hooks/mutations/useSigninMutation';
import { useForm } from '@/hooks/useForm';

export default function Login() {
  const [form, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const { mutate, isLoading, isError, errorData } = useSigninMutation(form);

  return (
    <Form
      submitForm={mutate}
      className="flex flex-col w-full max-w-md gap-4 my-6"
    >
      <Input
        id="login-email"
        name="email"
        label="E-mail:"
        placeholder="Informe seu email"
        value={form.email}
        onChange={handleInputChange}
        disabled={isLoading}
      />
      <Input
        id="lolgin-password"
        name="password"
        label="Senha:"
        placeholder="Informe sua senha"
        value={form.password}
        onChange={handleInputChange}
        disabled={isLoading}
      />
      {isError && (
        <div>
          {errorData?.details ? (
            errorData?.details.map((detail, index) => (
              <ErrorMessage key={index}>{detail.message}</ErrorMessage>
            ))
          ) : (
            <ErrorMessage>{errorData?.message}</ErrorMessage>
          )}
        </div>
      )}
      <Button aria-label="Conectar usuário" isLoading={isLoading}>
        Conectar
      </Button>
    </Form>
  );
}
