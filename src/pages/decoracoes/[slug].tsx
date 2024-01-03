/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-mixed-spaces-and-tabs */
import { type GetStaticPaths, type GetStaticProps } from 'next';

import { type IImage } from '../../types';
import { decoracoes } from '../../arts';
import { slugify } from '../../helpers';
import { Single } from '../../modules/single';

function Art({ descricao, nome, imagens }: IImage): JSX.Element {
  return <Single descricao={descricao} nome={nome} type="Decoração" imagens={imagens} />;
}
export default Art;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = decoracoes.map((item: IImage) => ({
    params: { slug: item.nome },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const art = decoracoes.find((pin) => slugify(pin.nome) === String(params?.slug));
  return {
    props: { ...art },
    revalidate: 60 * 10,
  };
};
