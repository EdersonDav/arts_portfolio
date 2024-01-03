import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { useState } from 'react';
import GlobalStyle from '../styles/globalStyle';
import { Header, Footer, FloatButton } from '../components';
import { lightTheme, darkTheme } from '../themes';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const [themeLight, setThemeLight] = useState(false);

  return (
    <ThemeProvider theme={themeLight ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header setTheme={setThemeLight} themeLight={themeLight} />
      <Component {...pageProps} />
      <FloatButton />
      <Footer />
    </ThemeProvider>
  );
}
