import React from 'react';

type NavBarPropsType = {
  children: React.ReactNode;
};

export function NavBar({ children }: NavBarPropsType) {
  return (
    <nav className="h-creen">
      <ul className="flex flex-col gap-2">{children}</ul>
    </nav>
  );
}
