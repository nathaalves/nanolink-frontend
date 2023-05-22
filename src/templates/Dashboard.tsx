import { NavBar } from '@/components/NavBar';

type DashboardPropsType = {
  children: React.ReactNode;
};

export function Dashboard({ children }: DashboardPropsType) {
  return (
    <main className="flex h-screen">
      <NavBar closed={true} />
      <div className="flex-1 bg-slate-100 px-8">{children}</div>
    </main>
  );
}
