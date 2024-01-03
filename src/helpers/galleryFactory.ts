import { type IGalleryImage, type IImage } from '../types';

export const galleryFactory = (image: IImage): IGalleryImage => ({
  src: image.imagens[0].url,
  width: image.imagens[0].largura,
  height: image.imagens[0].altura,
  alt: image.descricao,
  name: image.nome,

  isSelected: false,
});
