'use client';

import { useRef, useState } from 'react';
import ReactCrop, { centerCrop, makeAspectCrop, Crop } from 'react-image-crop';
import { Input } from './Input';
import { MdClose } from 'react-icons/md';

import 'react-image-crop/dist/ReactCrop.css';
import { Button } from './Button';

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 100,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

type ImageCropPropsType = {
  id?: string;
  name?: string;
  label?: string;
  setDataUrl: React.Dispatch<React.SetStateAction<string | null>>;
};

export function ImageCrop({ setDataUrl }: ImageCropPropsType) {
  const [imgSrc, setImgSrc] = useState('');
  const [crop, setCrop] = useState<Crop>();
  const imgRef = useRef<HTMLImageElement>(null);

  const onCropComplete = (crop: Crop) => {
    const canvas = document.createElement('canvas');
    const image = new Image();
    image.src = imgSrc;

    if (!imgRef.current) return;
    const scaleX = image.naturalWidth / imgRef.current.width;
    const scaleY = image.naturalHeight / imgRef.current.height;

    canvas.width = 70;
    canvas.height = 70;

    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      70,
      70
    );

    const croppedImageUrl = canvas.toDataURL('image/png');
    setDataUrl(croppedImageUrl);
  };

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined);
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        setImgSrc(reader.result?.toString() || '')
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    const { width, height } = e.currentTarget;
    setCrop(centerAspectCrop(width, height, 1));
  }

  return (
    <>
      <Input
        id="customNanolinkImage"
        name="image"
        label="Imagem (opcional):"
        type="file"
        accept="image/*"
        onChange={onSelectFile}
      />
      {!!imgSrc && (
        <div className="flex items-center justify-center p-8 bg-black/40 backdrop-blur-sm absolute top-0 bottom-0 left-0 right-0 z-10">
          <div className="relative">
            <div className="bg-white h-fit p-4 rounded-lg">
              <ReactCrop
                crop={crop}
                onChange={(_, percentCrop) => setCrop(percentCrop)}
                onComplete={(c) => onCropComplete(c)}
                aspect={1}
              >
                <img
                  alt="Crop me"
                  src={imgSrc}
                  onLoad={onImageLoad}
                  ref={imgRef}
                />
              </ReactCrop>
            </div>
            <Button
              className="h-8 p-2 whitespace-nowrap absolute -bottom-6 right-1/2 translate-x-1/2"
              onClick={() => setImgSrc('')}
            >
              Cortar imagem
            </Button>
            <button
              className="p-2"
              onClick={() => {
                setImgSrc('');
                setDataUrl(null);
              }}
            >
              <MdClose className="text-3xl text-white absolute -top-10 right-0" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
