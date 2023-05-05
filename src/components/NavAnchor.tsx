'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TbLink } from 'react-icons/tb';

type NavAnchorPropsType = {
  path: string;
  icon: string;
  label: string;
  closed?: boolean;
};

type IconPropsType = {
  name: string;
  className: string;
};

const Icon = ({ name, className }: IconPropsType) => {
  const selectedIcon = () => {
    switch (name) {
      case 'link':
        return <TbLink />;
      default:
        return null;
    }
  };

  return <span className={className}>{selectedIcon()}</span>;
};

export function NavAnchor({ path, icon, label, closed }: NavAnchorPropsType) {
  const activePath = usePathname();

  return (
    <li>
      <Link
        href={path}
        className={`
          group flex items-center h-10 px-8 rounded-lg hover:bg-slate-100 relative
          ${
            activePath === path
              ? 'text-sky-800 bg-sky-50 font-bold'
              : 'text-zinc-800 font-semibold'
          }
          ${closed ? 'max-w-min' : 'w-60'}
        `}
      >
        <Icon name={icon} className="text-3xl" />
        <span
          className={`
          items-center h-full px-4 whitespace-nowrap rounded-full
          ${
            closed
              ? 'hidden group-hover:flex text-white absolute translate-x-full right-4 z-10 bg-sky-800'
              : 'flex relative translate-x-0'
          }
        `}
        >
          {label}
        </span>
        {activePath === path && (
          <span
            className={`
            w-2 h-full rounded-l-lg absolute right-0 bg-sky-800
            ${closed ? 'group-hover:hidden' : 'group-hover:flex'}
          `}
          ></span>
        )}
      </Link>
    </li>
  );
}
