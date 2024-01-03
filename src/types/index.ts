export interface IImage {
  nome: string;
  descricao: string;
  imagens: IPictures[];
}

export interface IPictures {
  altura: number;
  largura: number;
  url: string;
}

export interface IGalleryImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  isSelected?: boolean;
  name: string;
}

export interface IMedias {
  id?: string;
  name: string;
  url: string;
  classN: string;
}
