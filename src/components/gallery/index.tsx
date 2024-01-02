// eslint-disable-next-line import/no-extraneous-dependencies
import { Gallery as Mosaic } from 'react-grid-gallery';
import { useEffect, useState } from 'react';
import { type IGalleryImage, type IImage } from '../../types';
import { galleryFactory } from '../../helpers';
import { Container } from './styled';

interface IGalleryProps {
  title: string;
  id: string;
  images: IImage[];
}

export function Gallery({ images, title, id }: IGalleryProps): JSX.Element {
  const [gallery, setGallery] = useState<IGalleryImage[]>([]);
  useEffect(() => {
    const newGallery = images.map(galleryFactory);
    setGallery(newGallery);
  }, [images]);

  return (
    <Container className="wrapper">
      <h2 id={id}>{title}</h2>
      {gallery.length && <Mosaic images={gallery} />}
    </Container>
  );
}
