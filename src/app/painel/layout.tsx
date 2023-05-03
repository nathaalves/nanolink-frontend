export const metadata = {
  title: 'Nano Link | Painel',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
