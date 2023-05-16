import { LinksList } from '@/components/LinksList';

export default function NanoLinks() {
  return (
    <section className="flex-1 py-4 pl-1 rounded-lg bg-white">
      <div className="flex flex-col h-full bg-slate-200">
        <LinksList />
      </div>
    </section>
  );
}
