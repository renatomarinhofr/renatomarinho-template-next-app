import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles =  createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  body {
    background-color: #F6F7FB;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }

  img, svg {
    vertical-align: middle;
  }

  ul {
    list-style: none;
  }
`;
