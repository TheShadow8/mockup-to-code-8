import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

import { textColor } from './utilities';

const GlobalStyle = createGlobalStyle`
${normalize()};

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  html {
    box-sizing: border-box;
    font-size: 62.5%;
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
