import { Slider } from '..';
import { Container, HeroContent, HeroContentLeft, HeroContentRight } from './styled';

export function Hero(): JSX.Element {
  return (
    <Container className="wrapper">
      <HeroContent>
        <HeroContentLeft>
          <p>
            Meu nome é Laercio, sou um artista plástico independente e autodidata. Desde a minha
            juventude, venho desenvolvendo trabalhos artesanais, explorando desenhos e pinturas.
            Atualmente, meu foco está em pinturas e decorações em geral. Convido você a explorar
            minha galeria de obras e ficarei encantado em receber seu contato para discutir mais
            sobre meu trabalho e suas possíveis experiências artísticas.
          </p>
        </HeroContentLeft>
        <HeroContentRight>
          <Slider />
        </HeroContentRight>
      </HeroContent>
    </Container>
  );
}
