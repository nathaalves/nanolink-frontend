'use client';

import { InputHTMLAttributes, useRef, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { IoMdMail, IoMdLock } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  labelVisible?: boolean;
  icon?: 'email' | 'password' | 'name';
};

export function Input({
  label,
  labelVisible = true,
  type = 'text',
  icon,
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const icocnStyle = 'text-2xl text-zinc-600';

  const icons = (name: string) => {
    switch (name) {
      case 'email':
        return <IoMdMail className={icocnStyle} />;
      case 'password':
        return <IoMdLock className={icocnStyle} />;
      case 'name':
        return <BsFillPersonFill className={icocnStyle} />;
    }
  };

  return (
    <div className="flex flex-col gap-1" onClick={handleClick}>
      {labelVisible && (
        <label htmlFor={rest.id} className="text-slate-700">
          {label}
        </label>
      )}
      <div className="flex items-center h-12 px-2 gap-2 border rounded bg-white focus-within:border-sky-600 relative">
        {icon && icons(icon)}
        <input
          aria-label={label}
          className={'flex-1 h-max outline-none truncate'}
          type={type === 'password' ? (isVisible ? 'text' : 'password') : type}
          ref={inputRef}
          {...rest}
        />
        {type === 'password' && (
          <>
            {isVisible ? (
              <AiFillEye
                onClick={() => setIsVisible(!isVisible)}
                className={`${icocnStyle} cursor-pointer`}
              />
            ) : (
              <AiFillEyeInvisible
                onClick={() => setIsVisible(!isVisible)}
                className={`${icocnStyle} cursor-pointer`}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
