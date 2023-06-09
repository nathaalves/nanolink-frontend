'use client';

import React from 'react';
import {
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdQueryStats,
} from 'react-icons/md';
import { UserProfile } from './UserProfile';
import { Nav } from './Nav';
import { NavItem } from './NavItem';
import { BiLinkAlt } from 'react-icons/bi';

type NavBarPropsType = {
  closed?: boolean;
};

export function NavBar({ closed = false }: NavBarPropsType) {
  const [isClosed, setIsClosed] = React.useState(closed);

  const iconStyle = 'text-xs text-sky-800 absolute top-1/2 -translate-y-1/2';

  const handleToggle = () => {
    setIsClosed(!isClosed);
  };

  return (
    <div
      className={`flex h-full absolute z-10 md:w-fit md:relative
      ${isClosed ? 'w-fit' : 'w-full'}
      `}
    >
      <div className="flex flex-col h-full w-fit shadow-[5px_0px_14px_1px_rgba(0,0,0,0.1)] bg-white relative">
        <UserProfile isClosed={isClosed} />
        <hr className="border-slate-200 my-4" />
        <Nav isClosed={isClosed}>
          <NavItem
            path="/estatisticas"
            label="Estatísticas"
            Icon={MdQueryStats}
          />
          <NavItem path="/nanolinks" label="Nano Links" Icon={BiLinkAlt} />
        </Nav>
        <button
          className="absolute z-10 top-1/2 -translate-y-1/2 right-0 translate-x-full overflow-hidden pr-2"
          onClick={handleToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 96"
            width="16"
            height="96"
            fill="#FFF"
            className="-translate-x-[2.5px]"
          >
            <path d="M0 0h3c0 20 12 12 12 32v32c0 20-12 12-12 32H0z"></path>
          </svg>
          {isClosed ? (
            <MdArrowForwardIos className={iconStyle} />
          ) : (
            <MdArrowBackIosNew className={iconStyle} />
          )}
          <span className="h-1/2 bg-black absolute left-0 bottom-1/2 translate-y-1/2 shadow-[0px_0px_20px_4px_rgba(0,0,0,0.7)] -z-10"></span>
        </button>
      </div>
      <div
        className={` 
          flex-1 bg-black/40 backdrop-blur-lg
        `}
        onClick={handleToggle}
      ></div>
    </div>
  );
}
