'use client';

import Link from 'next/link';
import Image from 'next/image';

import linkImage from '@/assets/images/nanolink-192x192.png';
import { useGetNanoLinksQuery } from '@/hooks/queries/useGetNanoLinksQuery';
import { LoadSpinner } from './LoadSpinner';
import { isoDateToLocalDate } from '@/utils/isoDateToLocalDate';

const BASE_URL = new URL(process.env.NEXT_PUBLIC_API_BASE_URL as string).host;

export function LinksList() {
  const { responseData: nanoLinks, isLoading } = useGetNanoLinksQuery();

  return (
    <>
      {isLoading ? (
        <span className="flex items-center justify-center w-40 h-16 m-auto">
          <LoadSpinner spinnerClass="bg-sky-800" />
        </span>
      ) : nanoLinks && nanoLinks.length > 0 ? (
        <ul>
          {nanoLinks.map((nanoLink) => (
            <li key={nanoLink.id}>
              <Link
                href={`detalhes/${nanoLink.nanoId}`}
                className="flex p-4 border-t-[1px] border-slate-200 bg-white hover:bg-slate-50 relative"
              >
                <Image
                  src={nanoLink.image ? nanoLink.image : linkImage}
                  alt={nanoLink.title}
                  width={0}
                  height={0}
                  className="w-14 h-14"
                />
                <div className="flex flex-col justify-evenly w-full ml-4">
                  <span className="font-medium truncate">{nanoLink.title}</span>
                  <p className="text-sm text-sky-600 font-bold truncate">
                    {BASE_URL}/{nanoLink.nanoId}
                  </p>
                  <p className="text-xs text-zinc-600">
                    {isoDateToLocalDate(nanoLink.updatedAt)}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <span className="flex flex-1 items-center justify-center text-zinc-500 font-medium">
          Comece criando um Nano Link!
        </span>
      )}
    </>
  );
}
