import { decoracoes, pinturas } from '../../arts';
import { Gallery, Hero } from '../../components';

export function Main(): JSX.Element {
  return (
    <>
      <Hero />
      <Gallery id="pinturas" images={pinturas} slug="pinturas" title="Pinturas" />
      <Gallery id="decoracoes" images={decoracoes} slug="decoracoes" title="Decorações" />
    </>
  );
}
