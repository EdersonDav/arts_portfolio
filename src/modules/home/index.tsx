import { decoracoes, pinturas } from '../../arts';
import { FloatButton, Gallery, Hero } from '../../components';

export function Main(): JSX.Element {
  return (
    <>
      <Hero />
      <Gallery id="pinturas" images={pinturas} title="Pinturas" />
      <Gallery id="decoracoes" images={decoracoes} title="Decorações" />
      <FloatButton />
    </>
  );
}
