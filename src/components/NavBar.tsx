import React from 'react';

type NavBarPropsType = {
  children: React.ReactNode;
  closed?: boolean;
};

export function NavBar({ children, closed }: NavBarPropsType) {
  return (
    <nav
      className={`
        h-full pt-4 group/nav
        ${closed ? 'max-w-min closed' : 'w-60'}
    `}
    >
      <ul className="flex flex-1 flex-col gap-2">{children}</ul>
    </nav>
  );
}
