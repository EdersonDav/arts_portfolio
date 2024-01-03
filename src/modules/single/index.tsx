import Head from 'next/head';
import Image from 'next/image';
import { v4 as generate } from 'uuid';

import { useState } from 'react';
import { type IPictures, type IImage } from '../../types';
import { ImagesBoxes, Main } from './styled';

interface ISingleProps extends IImage {
  type: 'Pintura' | 'Decoração';
}

export function Single({ descricao, nome, imagens, type }: ISingleProps): JSX.Element {
  const [image, setImage] = useState<IPictures>(imagens[0]);

  return (
    <>
      <Head>
        <title>{nome}</title>
        <meta property="og:title" content={`${type}: ${nome}`} key="title" />
        <meta name="description" content={descricao} />
      </Head>
      <Main className="wrapper">
        <h2>{nome}</h2>
        <div>
          <div>
            <Image
              src={`/${image.url}`}
              alt={descricao}
              height={image.altura}
              width={image.largura}
              loading="lazy"
            />
          </div>

          <ImagesBoxes>
            {imagens.length
              ? imagens.map((picture) => (
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                  <li
                    key={generate()}
                    onClick={() => {
                      setImage(picture);
                    }}
                  >
                    <Image
                      src={`/${picture.url}`}
                      alt={descricao}
                      height={100}
                      width={100}
                      loading="lazy"
                      className={picture.url === image.url ? 'active' : ''}
                    />
                  </li>
                ))
              : null}
          </ImagesBoxes>
        </div>
        <p>{descricao}</p>
      </Main>
    </>
  );
}
