import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
  }

  html, body {
    font-family: 'Roboto', sans-serif;
    background: #F6FBF8;
  }
`;
