import { Header } from '@/templates/Header';
import { Main } from '@/templates/Main';

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-x-hidden">
      <Header />
      <Main />
    </div>
  );
}
