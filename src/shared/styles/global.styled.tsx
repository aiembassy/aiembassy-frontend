import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }
    
    body {
        height: 100%;
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    #root {
        height: 100%;
    }
    
    code {
        font-family: 'Lato', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
    
    svg {
      transition: all .5s;
      path, circle, rect {
        transition: all .5s ;
      }
    }
`;
