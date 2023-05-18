'use client';

import { ResponsiveContainer } from '@/components/ResponsiveContainer';
import { HamburgerButton } from '@/components/HamburgerButton';
import { Anchor } from '@/components/Anchor';
import { useState } from 'react';
import { Logo } from '@/components/Logo';

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-center h-24">
        <ResponsiveContainer className="flex items-center justify-between p-4">
          <Logo />
          <HamburgerButton
            className="md:hidden"
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
          <nav
            className={`bg-white/80 backdrop-blur-sm absolute top-24 -bottom-20 left-0 right-0 mb-20 md:block md:relative md:inset-auto md:mb-0 z-10
            ${isNavOpen ? 'block' : 'hidden'}
          `}
          >
            <ResponsiveContainer className="flex flex-col h-full gap-3 p-4 md:p-0">
              <div className="flex flex-col md:flex-row-reverse gap-3 mt-auto">
                <Anchor href="/nanolinks" className="text-white bg-sky-600">
                  Entrar
                </Anchor>
                <Anchor
                  href="/registro"
                  className="text-white bg-sky-600 md:bg-white md:text-sky-600"
                >
                  Registrar-se
                </Anchor>
              </div>
            </ResponsiveContainer>
          </nav>
        </ResponsiveContainer>
      </header>
    </>
  );
}
