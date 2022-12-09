import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  html, body, #root {
    background: var(--primary);
    max-height: 100vh;
    max-width: 100vw;
    margin: auto;

    height: 100%;
    width: 100%;
  }
  html {
    scroll-behavior: smooth;
  }

  *, button, input {
    border: 0;
    /* background: none; */
    font-family: 'Poppins', sans-serif;
  }

  :root {
    /* --primary: aliceBlue; */
    --primary: rgb(135, 135, 136);
    --secundary: #0d1525d3;
    --terciary: #fca311;
    --letters: #e5e5e5;
    --white: #fff;
  }
`;
