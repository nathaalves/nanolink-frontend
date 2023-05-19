import { useSignoutMutation } from '@/hooks/mutations/useSignoutMutation';
import { MdOutlineExitToApp } from 'react-icons/md';

export function UserDropDownMenu() {
  const { mutate } = useSignoutMutation();

  return (
    <div className=" mb-4">
      <button
        className="flex gap-4 items-center w-full px-8 py-2 text-red-500 text-left hover:bg-slate-100"
        onClick={() => mutate()}
      >
        <MdOutlineExitToApp /> Sair
      </button>
    </div>
  );
}
