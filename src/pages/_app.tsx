import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyle';
import { Header, Footer } from '../components';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
