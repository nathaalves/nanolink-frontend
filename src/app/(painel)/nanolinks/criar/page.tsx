'use client';

import { Button } from '@/components/Button';
import { Form } from '@/components/Form';
import { Input } from '@/components/Input';
import { useCreateCustomNanoLinkMutation } from '@/hooks/mutations/useCreateCustomNanoLinkMutation';
import { useForm } from '@/hooks/useForm';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import 'react-image-crop/dist/ReactCrop.css';

import linkImage from '@/assets/images/nanolink-192x192.png';
import Image from 'next/image';
import { ImageCrop } from '@/components/ImageCrop';
import { ErrorMessage } from '@/components/ErrorMessage';

export default function CreateNanoLink() {
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [form, handleInputChange] = useForm({
    originalURL: '',
    title: '',
    nanoId: '',
  });

  const { mutate, isLoading, errorData, isError } =
    useCreateCustomNanoLinkMutation({ ...form, image: dataUrl });

  const router = useRouter();

  return (
    <main className="flex flex-col h-full md:max-w-[800px] md:mx-auto">
      <h1 className="text-4xl text-sky-800 font-bold my-6">Criar Nano Link</h1>
      <Form className="flex flex-col flex-1 gap-4 my-6" submitForm={() => {}}>
        <Input
          id="customNanolinkOriginalURL"
          name="originalURL"
          label="URL original:"
          placeholder="Informe sua URL"
          value={form.originalURL}
          onChange={handleInputChange}
        />
        <div className="flex justify-between gap-4">
          <ImageCrop
            id="customNanolinkImage"
            name="image"
            label="Imagem (opcional):"
            setDataUrl={setDataUrl}
          />
          <div className="p-1 rounded bg-white">
            <Image
              src={dataUrl ? dataUrl : linkImage}
              alt="selected image"
              width={68}
              height={68}
              className="rounded min-w-[68px] min-h-[68px]"
            />
          </div>
        </div>
        <Input
          id="customNanolinkTitle"
          name="title"
          label="Titulo (opcional):"
          placeholder="Informe um título"
          value={form.title}
          onChange={handleInputChange}
        />
        <Input
          id="customNanolinkNanoId"
          name="nanoId"
          label="Link personalizado (opcional):"
          placeholder="nnlk.nl/..."
          value={form.nanoId}
          onChange={handleInputChange}
        />
        {isError && (
          <div>
            {errorData?.details ? (
              errorData?.details.map((detail, index) => (
                <ErrorMessage key={index}>{detail.message}</ErrorMessage>
              ))
            ) : (
              <ErrorMessage>{errorData?.message}</ErrorMessage>
            )}
          </div>
        )}
        <div className="flex flex-col md:flex-row-reverse gap-3 mt-auto">
          <Button
            type="submit"
            className="md:w-32 bg-sky-800"
            onClick={() => mutate()}
            isLoading={isLoading}
          >
            Criar
          </Button>
          <Button
            type="button"
            className="bg-transparent"
            onClick={() => router.push('/nanolinks')}
          >
            <span className="text-sky-800">Cancelar</span>
          </Button>
        </div>
      </Form>
    </main>
  );
}
