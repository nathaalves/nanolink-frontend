'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BiLinkAlt } from 'react-icons/bi';

type NavAnchorPropsType = {
  path: string;
  label: string;
};

type IconPropsType = {
  label: string;
  className: string;
};

const Icon = ({ label, className }: IconPropsType) => {
  const selectedIcon = () => {
    switch (label) {
      case 'Links':
        return <BiLinkAlt />;
      default:
        return null;
    }
  };

  return <span className={className}>{selectedIcon()}</span>;
};

export function NavAnchor({ path, label }: NavAnchorPropsType) {
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
        <Icon label={label} className="text-3xl" />
        <span
          className={`
          flex items-center h-full px-4 whitespace-nowrap rounded-full relative translate-x-0
          group-[.closed]/nav:hidden
          group-[.closed]/nav:group-hover:flex
          group-[.closed]/nav:text-white
          group-[.closed]/nav:absolute
          group-[.closed]/nav:translate-x-full
          group-[.closed]/nav:right-4
          group-[.closed]/nav:z-10
          group-[.closed]/nav:bg-sky-800
        `}
        >
          {label}
        </span>
        {activePath === path && (
          <span
            className={`
            w-2 h-full rounded-l-lg absolute right-0 bg-sky-800
            group-hover:flex
            group-[.closed]/nav:group-hover:hidden
          `}
          ></span>
        )}
      </Link>
    </li>
  );
}
