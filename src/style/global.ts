import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  /* *::-webkit-scrollbar {
    width: 10px;
  }
  *::-webkit-scrollbar-track {
    background: #bcbcbc;
  }
  *::-webkit-scrollbar-thumb {
    background-color:  rgba(0,0,0, 0.45);
  } */
  html {
    font-size: 55%;
  }
  body, input, button {
    font-family: 'Days One', sans-serif;
    background-color: #fff;
  }
  #root {
    margin: 0 auto;
  }
  button {
    cursor: pointer;
  }
`;
