import { useState } from 'react';

export function useForm<T>(
  initialState: T
): [T, (e: React.ChangeEvent<HTMLInputElement>) => void] {
  const [form, setForm] = useState<T>(initialState);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const inputElement = e.target as HTMLInputElement;
    const { name, value } = inputElement;

    setForm({
      ...form,
      [name]: value,
    });
  }

  return [form, handleInputChange];
}
