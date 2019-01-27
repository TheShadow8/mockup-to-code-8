import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

import { textColor } from './utilities';

const GlobalStyle = createGlobalStyle`
${normalize()};

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
    color: ${textColor}
  }

  .App {
 
    width: 96vw;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
