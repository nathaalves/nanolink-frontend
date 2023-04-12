import { quicksand } from '@/assets/fonts/quicksand';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className={
        'h-12 rounded bg-sky-600 text-white font-bold px-4 ' +
        quicksand.className
      }
      {...rest}
    >
      {children}
    </button>
  );
}
