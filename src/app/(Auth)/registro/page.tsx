'use client';

import { Button } from '@/components/Button';
import { Form } from '@/components/Form';
import { Input } from '@/components/Input';
import { useForm } from '@/hooks/useForm';

export default function Signup() {
  const [form, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = () => {};

  return (
    <Form
      submitForm={handleSubmit}
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
      />
      <Input
        id="confirmPassword"
        name="confirmPassword"
        label="Confirmação de senha:"
        type="password"
        icon="password"
        placeholder="Confirme sua senha"
        value={form.confirmPassword}
        onChange={handleInputChange}
      />
      <Button aria-label="Regigstrar usuário">Registrar</Button>
    </Form>
  );
}
