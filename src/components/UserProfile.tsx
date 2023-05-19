import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { UserDropDownMenu } from './UserDropDownMenu';

type UserProfileProps = {
  isClosed: boolean;
};

type UserData = {
  name: string;
  email: string;
};

export function UserProfile({ isClosed }: UserProfileProps) {
  const queryClient = useQueryClient();
  const userData = queryClient.getQueryData<UserData>(['userData']);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative group/profile">
      <button
        className={`
          items-center h-14 pl-2 gap-4 mx-auto mt-10
          ${isClosed ? 'hidden md:flex' : 'flex'}
        `}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div className="flex items-center justify-center w-9 h-9 rounded-full text-xl text-white font-bold bg-sky-800">
          {userData?.name[0].toUpperCase()}
        </div>
        <div
          className={`w-[88px]
        ${isClosed ? 'hidden' : 'block'}
      `}
        >
          <p className="truncate">{userData?.name + ' asadasdasdasd'}</p>
          <p className="text-xs truncate">{userData?.email}</p>
        </div>
        <div className={`${isClosed ? 'hidden' : 'flex'}`}>
          {isDropdownOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
        </div>
      </button>
      {isDropdownOpen && <UserDropDownMenu />}
    </div>
  );
}
