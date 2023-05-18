import { UserDataProvider } from '@/providers/UserDataProvider';
import { Dashboard } from '@/templates/Dashboard';

export const metadata = {
  title: 'Nano Link | Painel',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserDataProvider>
      <Dashboard>{children}</Dashboard>
    </UserDataProvider>
  );
}
