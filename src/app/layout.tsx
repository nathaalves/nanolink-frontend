import './globals.css';
import { quicksand } from '@/assets/fonts/quicksand';

export const metadata = {
  title: 'Nano Link',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
