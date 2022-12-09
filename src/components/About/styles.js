import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2em;
  >section {
    max-width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 100px;
    >h1 {
      font-size: 2.82em;
      color: var(--terciary);
      >span {
        color: var(--secundary);
      }
    }
    >article {
      color: var(--secundary);
      width: 100%;
    }
  }
  >main {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 60px;
    margin-left: 200px;
    justify-content: center;
    >h3 {
      color: var(--terciary);
      >span {
        color: var(--secundary);
      }
    }
  }
  @media screen and (max-width: 768px) {
    max-width: 100vw;
    max-height: 100vh;
    padding-top: 9.8em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
    align-self: center;
    font-size: 0.65em;
    section {
      margin: auto;
      height: 60%
      display:flex:
      flex-direction: column;
      text-align: justify;
      word-break: break-word;
      article {
        max-width: 100%
        width: 100;
        font-size: 1.2em;
        font-weight: bold;
        text-align: start;
        word-break: break-word;
        letter-spacing: 1px;
      }
    }
    main {
      margin: auto;
      height: 40%
      display:flex:
      flex-direction: column;
      text-align: justify;
      word-break: break-word;
    }

    h3 {
      /* line-height: 200%; */
      /* font-size: 1.2em; */
      width: 100%;
      text-align: justify;
    }
  }
`;

export default Container;
