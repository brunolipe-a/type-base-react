import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,700;1,400;1,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    display: flex;
    flex: 1
  }

  body, button, input {
    font-family: 'Rubik', Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
`;

export default GlobalStyle;