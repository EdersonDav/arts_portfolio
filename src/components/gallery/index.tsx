// eslint-disable-next-line import/no-extraneous-dependencies
import { Gallery as Mosaic } from 'react-grid-gallery';
import { useEffect, useState } from 'react';
import { type IImage } from '../../types';

interface IGalleryProps {
  title: string;
  id: string;
  images: IImage[];
}

interface IGalleryImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  isSelected: boolean;
}

export function Gallery({ images, title, id }: IGalleryProps): JSX.Element {
  const [gallery, setGallery] = useState<IGalleryImage[]>([]);
  useEffect(() => {
    const newGallery = images.map((image) => {
      return {
        src: image.url,
        width: image.largura,
        height: image.altura,
        alt: image.nome,
        isSelected: true,
      };
    });

    setGallery(newGallery);
  }, [images]);

  return (
    <section>
      <h2 id={id}>{title}</h2>
      {gallery.length && <Mosaic images={gallery} />}
    </section>
  );
}
