import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      white: string;
      ny: string;
      paris: string;
      rio: string;
      tokyo: string;
    };
  }
}