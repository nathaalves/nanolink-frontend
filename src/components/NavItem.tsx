'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconType } from 'react-icons';

type NavAnchorPropsType = {
  path?: string;
  onClick?: () => void;
  label: string;
  Icon: IconType;
  role?: 'anchor' | 'button';
};

export function NavItem({
  path,
  label,
  Icon,
  role = 'anchor',
  onClick: onclick = () => {},
}: NavAnchorPropsType) {
  const activePath = usePathname();

  const handleButtonClick = () => {
    if (role === 'button') {
      onclick();
    }
  };

  const NavElementEstructure = () => {
    return (
      <div
        className={`
          group flex flex-1 items-center h-10 px-6 rounded-lg hover:bg-sky-50 relative
          ${
            activePath === path && role === 'anchor'
              ? 'text-sky-800 bg-sky-50 font-bold'
              : 'text-zinc-800 font-semibold'
          }
        `}
      >
        <Icon className="text-4xl" />
        <span
          className={`
            flex items-center h-full px-4 whitespace-nowrap rounded-full relative translate-x-0
            group-[.minimized]/nav:hidden
            group-[.minimized]/nav:group-hover:flex
            group-[.minimized]/nav:text-white
            group-[.minimized]/nav:absolute
            group-[.minimized]/nav:translate-x-full
            group-[.minimized]/nav:right-4
            group-[.minimized]/nav:z-10
            group-[.minimized]/nav:bg-sky-800
          `}
        >
          {label}
        </span>
      </div>
    );
  };

  return (
    <li>
      {role === 'anchor' ? (
        <Link href={path ? path : '#'}>
          <NavElementEstructure />
        </Link>
      ) : (
        <button className="w-full" onClick={handleButtonClick}>
          <NavElementEstructure />
        </button>
      )}
    </li>
  );
}
