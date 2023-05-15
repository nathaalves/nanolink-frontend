import { Anchor } from '@/components/Anchor';
import { GoPlus } from 'react-icons/go';

export const metadata = {
  title: 'Nano Link | Painel',
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full pb-4">
      <header className="flex justify-between p-4 rounded-b-lg shadow-[0_0_10px_0_rgba(0,0,0,0.1)] bg-white">
        <div>
          <h1 className="text-4xl text-sky-800 font-bold my-6">Nano Links</h1>
        </div>
        <Anchor
          href="/nanolinks/criar"
          className="bg-sky-800 text-white mt-auto"
        >
          <span className=" text-3xl md:hidden">
            <GoPlus />
          </span>
          <span className="hidden md:flex">Novo Link</span>
        </Anchor>
      </header>
      <main className="flex flex-1 mt-4">{children}</main>
    </div>
  );
}
