import Link from 'next/link';

type AnchorPropsType = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function Anchor({ href, children, className }: AnchorPropsType) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center h-12 rounded text-sky-600 font-bold px-4 py-2 hover:opacity-75
        ${className}
     `}
    >
      {children}
    </Link>
  );
}
