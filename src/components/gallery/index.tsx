/* eslint-disable @typescript-eslint/no-misused-promises */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Gallery as Mosaic } from 'react-grid-gallery';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { type IGalleryImage, type IImage } from '../../types';
import { galleryFactory, slugify } from '../../helpers';
import { Container } from './styled';

interface IGalleryProps {
  title: string;
  id: string;
  images: IImage[];
  slug: string;
}

export function Gallery({ images, title, id, slug }: IGalleryProps): JSX.Element {
  const [gallery, setGallery] = useState<IGalleryImage[]>([]);
  useEffect(() => {
    const newGallery = images.map(galleryFactory);
    setGallery(newGallery);
  }, [images]);

  const router = useRouter();

  const handleClick = async (index: number): Promise<void> => {
    const to = slugify(gallery[index].name);
    await router.push(`/${slug}/${to}`);
  };

  return (
    <Container className="wrapper">
      <h2 id={id}>{title}</h2>
      {gallery.length && <Mosaic images={gallery} onClick={handleClick} />}
    </Container>
  );
}
