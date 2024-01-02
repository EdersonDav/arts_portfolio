export interface IImage {
  nome: string;
  altura: number;
  largura: number;
  descricao: string;
  url: string;
}

export interface IGalleryImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  isSelected?: boolean;
}

export interface IMedias {
  id?: string;
  name: string;
  url: string;
  classN: string;
}
