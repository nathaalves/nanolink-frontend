'use client';

import React from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

type NavBarPropsType = {
  children: React.ReactNode;
  closed?: boolean;
};

export function NavBar({ children, closed = false }: NavBarPropsType) {
  const [isClosed, setIsClosed] = React.useState(closed);

  const iconStyle = 'text-xs text-white absolute top-1/2 -translate-y-1/2';

  const handleToggle = () => {
    setIsClosed(!isClosed);
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
        className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full"
        onClick={handleToggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 96"
          width="16"
          height="96"
          className="fill-sky-800 -translate-x-[2.5px]"
        >
          <path d="M0 0h3c0 20 12 12 12 32v32c0 20-12 12-12 32H0z"></path>
        </svg>
        {isClosed ? (
          <MdArrowForwardIos className={iconStyle} />
        ) : (
          <MdArrowBackIosNew className={iconStyle} />
        )}
      </button>
    </div>
  );
}
