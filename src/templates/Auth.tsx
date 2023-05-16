'use client';

import Image from 'next/image';
import { Anchor } from '@/components/Anchor';
import { usePathname } from 'next/navigation';

import robotFindingData from '@/assets/images/robot-finding-data.svg';
import robotsDoingDataResearch from '@/assets/images/robots-doing-data-research.svg';
import { Logo } from '@/components/Logo';

type AuthPropsType = {
  children: React.ReactNode;
};

export function Auth({ children }: AuthPropsType) {
  const url = usePathname();

  return (
    <main className="flex flex-col xl:flex-row h-screen">
      <div className="flex-1 overflow-hidden relative">
        <div className="w-[100rem] h-[100rem] md:w-[200rem] md:h-[200rem] rounded-full bg-sky-600 absolute right-1/2 md:right-3/4 xl:right-0 xl:left-[-250rem] xl:translate-y-[20%] bottom-0 translate-x-1/2"></div>
        <div className="flex xl:flex-col items-center justify-center gap-20 w-full h-full absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center w-64 gap-4 xl:absolute left-[20%] bottom-[46rem]">
            <h2 className="text-2xl font-bold text-center text-white">
              {url === '/entrada'
                ? 'Ainda não possui uma conta?'
                : 'Já possui uma conta?'}
            </h2>
            <Anchor
              href={url === '/entrada' ? '/registro' : '/entrada'}
              className="text-white w-36 border-2 border-white rounded-full"
            >
              {url === '/entrada' ? 'Registrar-se' : 'Conecte-se'}
            </Anchor>
          </div>
          <Image
            src={robotFindingData}
            alt="Robot finding data"
            className="w-96 hidden md:block xl:hidden"
            priority
          />
          <Image
            src={robotsDoingDataResearch}
            alt="Robot doing data research"
            className="w-[90%] max-w-4xl hidden xl:block absolute bottom-20 left-36"
            priority
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-3/4 xl:w-[32rem] xl:h-full px-12 py-6 overflow-y-auto">
        <Logo />
        <h2 className="text-3xl text-zinc-600 font-bold mt-10">
          {url === '/entrada' ? 'Conecte-se' : 'Registre-se'}
        </h2>
        {children}
      </div>
    </main>
  );
}
