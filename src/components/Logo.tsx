import Link from 'next/link';
import { Sriracha } from 'next/font/google';

const sriracha = Sriracha({
  subsets: ['latin'],
  weight: '400',
});

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
