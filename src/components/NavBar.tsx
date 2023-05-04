type NavBarPropsType = {
  children: React.ReactNode;
};

export function NavBar({ children }: NavBarPropsType) {
  return (
    <nav className="w-60 h-creen">
      <ul className="flex flex-col p-4 gap-2">{children}</ul>
    </nav>
  );
}
