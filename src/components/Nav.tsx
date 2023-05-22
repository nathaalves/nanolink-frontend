type NavPropsType = {
  children: React.ReactNode;
  isClosed?: boolean;
};

export function Nav({ children, isClosed = false }: NavPropsType) {
  return (
    <nav
      className={`
        w-full group/nav
        ${isClosed ? 'hidden md:flex md:max-w-min minimized' : 'min-w-[240px]'}
      `}
    >
      <ul className="flex flex-1 flex-col gap-2">{children}</ul>
    </nav>
  );
}
