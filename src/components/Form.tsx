import { FormHTMLAttributes } from 'react';

type FormPropsType = FormHTMLAttributes<HTMLFormElement> & {
  submitForm: () => void;
};

export function Form({
  submitForm,
  children,
  className,
  ...rest
}: FormPropsType) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <form onSubmit={handleSubmit} className={`${className}`} {...rest}>
      {children}
    </form>
  );
}
