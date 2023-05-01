import { Auth } from '@/templates/Auth';

export const metadata = {
  title: 'Nano Link | Autenticação',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Auth>{children}</Auth>;
}
