import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  >section {
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    >h1 {
      font-size: 2.82em;
      color: var(--terciary);
      >span {
        color: var(--secundary);
      }
    }
    >article {
      width: 80%;
      height: 100%;
      margin-top: 0.5em;
      color: var(--secundary);
      p {
        width: 100%;
        height: 100%;
        word-break: break-word;
      }
    }
  }
  @media screen and (max-width: 768px) {
    max-width: 100vw;
    max-height: 100vh;
    padding-top: 4em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    section {
      width: 100%;
      height: 100%;
      display:flex;
      justify-content: center;
      align-items: center;
      h1 {
        width: 100%;
        text-align: center;
        margin-top: 0.5em;
      }
      article {
        height: 100%;
        max-width: 100%;
        font-size: 0.65em;
        p {
          max-width: 100%;
          font-weight: bold;
          text-align: start;
          font-size:1.2em;
          letter-spacing: 1px;

        }
      }
    }
  }
`;

export default Container;
