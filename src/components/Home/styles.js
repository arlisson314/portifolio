import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  max-width: 100vw;
  height: 100vh;
  padding-top: 3em;
    >div {
      max-width: 40%;
      position: relative;
      bottom: 0;
      >img {
        width: 100%;
      }
    }
    > section {
      max-width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: auto;
      > h2 {
        font-size: 1.9em;
        color: var(--secundary);
      }

      > h1 {
        font-size: 2.82em;
        color: var(--secundary);
        > span {
          color: var(--terciary);
        }
      }
      >article {
        color: var(--secundary);
        margin-left: auto;
        margin-right: auto;
      }
      > a {
        margin-top: 1em;
        height: 40px;
        width: 200px;
        background: var(--terciary);
        color: var(--secundary);
        text-align: center;
        padding: 0.5em;
        border-radius: 5px;
        font-weight: 500;
      }
      > a:hover {
        background-color: var(--letters);
        cursor: pointer;
        transition: 0.5s;
      }

    }
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-self: center;
      padding-top: 5em;
      div {
        width: 40vw;
        margin: auto;
      }

      section{
        font-size: 0.65em;
        text-align: center;
      }

      article {
        font-size: 1.2em;
        font-weight: bold;
        text-align: justify;
        word-break: break-word;
        letter-spacing: 1px;
      }

      a {
        margin: auto;
        margin-bottom: 5em;
        font-weight: bold;
        line-height: 300%;
        color: var(--secundary);
        background-color: var(--terciary);
      }
    }
    `;
export default Container;
