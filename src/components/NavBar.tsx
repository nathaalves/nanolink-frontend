'use client';

import React from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

type NavBarPropsType = {
  children: React.ReactNode;
  closed?: boolean;
  enableMinimization?: boolean;
};

export function NavBar({
  children,
  closed = false,
  enableMinimization = false,
}: NavBarPropsType) {
  const [isClosed, setIsClosed] = React.useState(closed);

  const iconStyle = 'text-2xl text-sky-800';

  const handleToggle = () => {
    setIsClosed(!isClosed);
  };

  const handleNavBarState = () => {
    if (isClosed) {
      if (enableMinimization) {
        return 'max-w-min minimized';
      }
      return 'hidden';
    } else {
      return 'w-60';
    }
  };

  return (
    <div className="relative">
      <nav
        className={`
          h-full pt-4 group/nav
          ${isClosed ? 'hidden md:flex md:max-w-min minimized' : 'w-60'}
      `}
      >
        <ul className="flex flex-1 flex-col gap-2">{children}</ul>
      </nav>
      <button
        className="flex items-center justify-center w-4 h-16 rounded-r-xl bg-white absolute top-1/2 -translate-y-1/2 right-0 translate-x-full"
        onClick={handleToggle}
      >
        {isClosed ? (
          <MdArrowForwardIos className={iconStyle} />
        ) : (
          <MdArrowBackIosNew className={iconStyle} />
        )}
      </button>
    </div>
  );
}
