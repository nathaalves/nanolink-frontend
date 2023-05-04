import Link from 'next/link';
import { IconType } from 'react-icons';

type NavAnchorPropsType = {
  path: string;
  Icon?: IconType;
  label: string;
  isActive?: boolean;
};

export function NavAnchor({ path, Icon, label, isActive }: NavAnchorPropsType) {
  return (
    <li>
      <Link
        href={path}
        className={`
          flex flex-1 items-center font-semibold px-2 gap-2 border-8 border-transparent rounded-r-lg hover:bg-slate-100
          ${isActive ? 'text-sky-800 bg-sky-50 border-l-sky-800' : ''}
        `}
      >
        {Icon ? (
          <>
            <Icon className="text-2xl" />
            {label}
          </>
        ) : (
          label
        )}
      </Link>
    </li>
  );
}
