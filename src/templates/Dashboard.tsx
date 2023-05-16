'use client';

import { NavAnchor } from '@/components/NavAnchor';
import { NavBar } from '@/components/NavBar';
import { BiLinkAlt } from 'react-icons/bi';
import { MdQueryStats } from 'react-icons/md';

type DashboardPropsType = {
  children: React.ReactNode;
};

export function Dashboard({ children }: DashboardPropsType) {
  return (
    <main className="flex h-screen">
      <NavBar closed={true}>
        <NavAnchor
          path="/estatisticas"
          label="Estatísticas"
          Icon={MdQueryStats}
        />
        <NavAnchor path="/nanolinks" label="Nano Links" Icon={BiLinkAlt} />
      </NavBar>
      <div className="flex-1 bg-slate-100 px-8">{children}</div>
    </main>
  );
}
