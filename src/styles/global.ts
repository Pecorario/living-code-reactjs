import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  body, :root {
    -webkit-font-smoothing: antialiased;
    width: 100vw;
    height: 100vh;
  }

  body, input, textarea, button {
    font-family: Arial, sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: transparent;
  }

  input {
    border: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ol, ul {
    list-style: none;
  }
`;
