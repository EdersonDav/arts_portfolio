import { decoracoes, pinturas } from '../../arts';
import { Header, Gallery } from '../../components';

export function Main(): JSX.Element {
  return (
    <>
      <Header />
      <Gallery id="pinturas" images={pinturas} title="Pinturas" />
      <Gallery id="decoracoes" images={decoracoes} title="Decorações" />
    </>
  );
}
