'use client';

import Image from 'next/image';
import mainIllustration from '@/assets/images/main-illustration.svg';
import { ResponsiveContainer } from '@/components/ResponsiveContainer';
import { LinkHandler } from '@/components/LinkHandler';

export function Main() {
  return (
    <ResponsiveContainer className="flex flex-col flex-1 items-center md:flex-row">
      <div className="sm:max-w-[500px] md:min-w-[700px] lg:min-w-[900px] md:translate-x-[-4rem]">
        <Image src={mainIllustration} alt="Main illustration" priority />
      </div>
      <div className="flex flex-col w-full p-4 gap-4 md:order-first md:min-w-[28rem] lg:min-w-[36rem]">
        <h1 className={'text-3xl text-center'}>
          Não perca mais tempo com links gigantes.{' '}
          <span className="text-sky-600">Encurte já!</span>
        </h1>
        <p className={'text-xl text-center text-gray-500'}>
          Faça seu site brilhar com links curtos e atraentes.{' '}
          <span className="hidden">
            Monitore suas estatísticas em tempo real e
          </span>
          Impulsione seu sucesso na web!
        </p>
        <LinkHandler />
      </div>
    </ResponsiveContainer>
  );
}
