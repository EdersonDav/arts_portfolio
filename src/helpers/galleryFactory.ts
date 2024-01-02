import { type IGalleryImage, type IImage } from '../types';

export const galleryFactory = (image: IImage): IGalleryImage => ({
  src: image.url,
  width: image.largura,
  height: image.altura,
  alt: image.nome,
  isSelected: false,
});
