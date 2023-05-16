'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconType } from 'react-icons';

type NavAnchorPropsType = {
  path: string;
  label: string;
  Icon: IconType;
};

export function NavAnchor({ path, label, Icon }: NavAnchorPropsType) {
  const activePath = usePathname();

  return (
    <li>
      <Link
        href={path}
        className={`
          group flex flex-1 items-center h-10 px-8 rounded-lg hover:bg-sky-50 relative
          ${
            activePath === path
              ? 'text-sky-800 bg-sky-50 font-bold'
              : 'text-zinc-800 font-semibold'
          }
        `}
      >
        <Icon className="text-3xl" />
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
      </Link>
    </li>
  );
}
