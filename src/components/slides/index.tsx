/* eslint-disable @next/next/no-img-element */
import { v4 as generate } from 'uuid';

import { useEffect, useState } from 'react';
import { type IImage } from '../../types';
import { Item, Content } from './styled';
import { decoracoes, pinturas } from '../../arts';
import { shuffleArray } from '../../helpers';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Slider(): JSX.Element {
  const [images, setImages] = useState<IImage[]>([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    pauseOnHover: true,
    fade: true,
  };
  useEffect(() => {
    setImages(shuffleArray(decoracoes.concat(pinturas)));
  }, []);
  return (
    <Content {...settings}>
      {images.length
        ? images.map((item) => (
            <Item key={generate()}>
              <img src={item.url} alt={item.descricao} />
              <h3>{item.nome}</h3>
            </Item>
          ))
        : null}
    </Content>
  );
}
