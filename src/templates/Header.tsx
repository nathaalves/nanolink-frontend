import { ResponsiveContainer } from '@/components/ResponsiveContainer';
import { SandwichButton } from '@/components/SandwichButton';
import { sriracha } from '@/assets/fonts/sriracha';
import Link from 'next/link';

export function Header() {
  return (
    <header className="flex items-center justify-center h-24">
      <ResponsiveContainer className="flex items-center justify-between p-4">
        <Link href="https://nanolink.app.br">
          <h1
            className={
              'text-4xl md:text-5xl text-sky-600 ' + sriracha.className
            }
          >
            Nano Link
          </h1>
        </Link>
        <SandwichButton />
      </ResponsiveContainer>
    </header>
  );
}
