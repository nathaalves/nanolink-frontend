'use client';

import { Button } from '@/components/Button';
import { Form } from '@/components/Form';
import { Input } from '@/components/Input';
import { useSignupMutation } from '@/hooks/mutations/useSignupMutation';
import { useForm } from '@/hooks/useForm';

export default function Signup() {
  const [form, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const { mutate, isLoading, errorData, isError } = useSignupMutation(form);

  return (
    <Form
      submitForm={mutate}
      className="flex flex-col w-full max-w-md gap-4 my-6"
    >
      <Input
        id="name"
        name="name"
        label="Nome:"
        icon="name"
        placeholder="Informe seu nome"
        value={form.name}
        onChange={handleInputChange}
        disabled={isLoading}
      />
      <Input
        id="email"
        name="email"
        type="email"
        label="E-mail:"
        icon="email"
        placeholder="Informe seu e-mail"
        value={form.email}
        onChange={handleInputChange}
        disabled={isLoading}
      />
      <Input
        id="password"
        name="password"
        type="password"
        icon="password"
        label="Senha:"
        placeholder="Informe sua senha"
        value={form.password}
        onChange={handleInputChange}
        disabled={isLoading}
      />
      <Input
        id="passwordConfirmation"
        name="passwordConfirmation"
        label="Confirmação de senha:"
        type="password"
        icon="password"
        placeholder="Confirme sua senha"
        value={form.passwordConfirmation}
        onChange={handleInputChange}
        disabled={isLoading}
      />
      <Button aria-label="Regigstrar usuário" isLoading={isLoading}>
        Registrar
      </Button>
    </Form>
  );
}
