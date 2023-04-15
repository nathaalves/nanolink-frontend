import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...rest }: InputProps) {
  return (
    <input
      className={'h-12 border rounded pl-4 focus:outline-sky-600 truncate'}
      {...rest}
    />
  );
}
