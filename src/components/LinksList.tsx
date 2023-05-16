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
        <div className="h-full border-y-[1px] border-slate-200 overflow-y-scroll">
          <ul className="flex flex-col flex-1 gap-[1px] border-x-[1px] border-slate-200">
            {nanoLinks.map((nanoLink) => (
              <li key={nanoLink.id}>
                <Link
                  href={`detalhes/${nanoLink.nanoId}`}
                  className="flex items-center p-4 bg-white hover:bg-slate-50 relative"
                >
                  <Image
                    src={nanoLink.image ? nanoLink.image : linkImage}
                    alt={nanoLink.title}
                    width={0}
                    height={0}
                    className="w-16 h-16"
                  />
                  <div className="flex flex-col flex-1 ml-4">
                    <p className="font-medium line-clamp-1">{nanoLink.title}</p>
                    <p className="text-sm text-sky-600 font-bold">
                      {BASE_URL}/{nanoLink.nanoId}
                    </p>
                    <p className="text-xs text-zinc-600 mt-auto">
                      {isoDateToLocalDate(nanoLink.updatedAt)}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <span className="flex flex-1 items-center justify-center text-zinc-500 font-medium">
          Comece criando um Nano Link!
        </span>
      )}
    </>
  );
}
