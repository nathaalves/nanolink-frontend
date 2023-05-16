import { Dashboard } from '@/templates/Dashboard';

export const metadata = {
  title: 'Nano Link | Painel',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Dashboard>{children}</Dashboard>;
}
