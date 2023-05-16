import QueryProvider from '@/providers/QueryProvider';
import { Quicksand } from 'next/font/google';

import './globals.css';

export const metadata = {
  title: 'Nano Link',
};

const quicksand = Quicksand({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={quicksand.className}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
