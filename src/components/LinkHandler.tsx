'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/Button';
import { Input } from './Input';
import { ErrorMessage } from './ErrorMessage';
import { useCreateShortLinkMutation } from '@/hooks/mutations/useCreateShortLinkMutation';

export function LinkHandler() {
  const [originalURL, setOriginalURL] = useState('');

  const { data, mutate, isLoading, isSuccess, errorData, isError } =
    useCreateShortLinkMutation(originalURL);

  const copyText = async () => {
    await navigator.clipboard.writeText(data?.shortLink ?? '');
  };

  return (
    <>
      <Input
        placeholder="URL original"
        value={originalURL}
        onChange={(event) => setOriginalURL(event.target.value)}
      />
      {isError && (
        <div>
          {errorData?.details.map((detail, index) => (
            <ErrorMessage key={index}>{detail.message}</ErrorMessage>
          ))}
        </div>
      )}
      <Button disabled={isLoading} onClick={() => mutate()}>
        Criar URL
      </Button>
      {isSuccess && (
        <>
          <hr className="border-red-500" />
          <div className="flex items-center gap-4">
            <div className="flex-1 min-w-0">
              <Link href={`https://${data?.shortLink}`} target="_blank">
                <strong className={'text-sky-600 hover:text-sky-700 truncate'}>
                  {data?.shortLink}
                </strong>
              </Link>
              <p className={'truncate text-gray-500'}>{data?.url}</p>
            </div>
            <Button onClick={copyText}>Copiar</Button>
          </div>
        </>
      )}
    </>
  );
}
