'use client';

import { Button } from '@/components/Button';
import { useState } from 'react';
import { shortLinkService } from '@/services/shortLinkService';
import Link from 'next/link';
import { Input } from './Input';
import { quicksand } from '@/assets/fonts/quicksand';

export function LinkHandler() {
  const [originalURL, setOriginalURL] = useState('');
  const [shortLink, setShortLink] = useState<string | null>(null);
  const [url, setUrl] = useState<string | null>(null);

  const createShortLink = async () => {
    const { url, shortLink } = await shortLinkService.get(originalURL);
    setShortLink(shortLink);
    setUrl(url);
  };

  const copyText = async () => {
    await navigator.clipboard.writeText(shortLink as string);
  };

  return (
    <>
      <Input
        placeholder="URL original"
        value={originalURL}
        onChange={(event) => setOriginalURL(event.target.value)}
      />
      <Button onClick={createShortLink}>Criar URL</Button>
      {shortLink && (
        <>
          <hr className="border-red-500" />
          <div className="flex items-center gap-4">
            <div className="flex-1 min-w-0">
              <Link href={`https://${shortLink}`} target="_blank">
                <strong
                  className={
                    'text-sky-600 hover:text-black truncate ' +
                    quicksand.className
                  }
                >
                  {shortLink}
                </strong>
              </Link>
              <p className={'truncate text-gray-500 ' + quicksand.className}>
                {url}
              </p>
            </div>
            <Button onClick={copyText}>Copiar</Button>
          </div>
        </>
      )}
    </>
  );
}
