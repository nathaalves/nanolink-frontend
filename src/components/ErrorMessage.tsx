import { MdError } from 'react-icons/md';

type ErroMessagePropsType = {
  children: React.ReactNode;
};

export function ErrorMessage({ children }: ErroMessagePropsType) {
  return (
    <div className="flex items-center gap-2">
      <MdError className="text-red-600 text-xl" />
      <p className={'text-red-600'}>{children}</p>
    </div>
  );
}
