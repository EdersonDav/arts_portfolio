import Head from 'next/head';
import { Main } from '../modules/home';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Laercio Silva Artes</title>
        <meta property="og:title" content=">Laercio Silva Artes" key="title" />
        <meta
          name="description"
          content="Portfólio do artista plástico Laercio Silva, veja as artes e decorações"
        />
      </Head>
      <main>
        <Main />
      </main>
    </>
  );
}
