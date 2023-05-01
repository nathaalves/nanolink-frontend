import { sriracha } from '@/assets/fonts/sriracha';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="https://nanolink.app.br">
      <h1
        className={`text-4xl md:text-5xl text-sky-600
          ${sriracha.className}
        `}
      >
        Nano Link
      </h1>
    </Link>
  );
}
