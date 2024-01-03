import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      shape: string;
      text: string;
      primaryText: string;
      headerFooter: string;
    };
  }
}
