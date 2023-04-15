import { ButtonHTMLAttributes } from 'react';
import { LoadSpinner } from './LoadSpinner';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, disabled, ...rest }: ButtonProps) {
  return (
    <button
      className={`
        flex items-center
        justify-center
        h-12
        rounded
        bg-sky-600
        text-white
        font-bold 
        px-4 py-2
        ${disabled ? 'opacity-50 ' : 'hover:opacity-75 '}
     `}
      {...rest}
    >
      {disabled ? <LoadSpinner /> : children}
    </button>
  );
}
