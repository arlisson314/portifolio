import styled from 'styled-components';

const Container = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items:center;
  >section {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    >h1 {
      color: var(--terciary);
      margin-right: 0.2ch;
      font-size: 2.82em;
      >span {
        color: var(--secundary);
      }
    }
  }
  >main {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 90%;
      height: 50%;
      input {
        width: 55%;
        height: 40px;
        border-radius: 5px;
        margin-bottom: 1ch;
        padding: 1ch;
        outline-style: none;
      }
      textarea {
        width: 55%;
        height: 30%;
        border-radius: 5px;
        margin-bottom: 1ch;
        padding: 1ch;
        outline-style: none;
      }
      button {
        width: 55%;
        border-radius: 5px;
        height: 40px;
        background: var(--terciary);
        color: var(--secundary);
        text-align: center;
        font-weight: 500;
        transition: 0.5s;
        letter-spacing: 2px;
      }
      button:hover {
        background-color: var(--letters);
        cursor: pointer;
      }
      button:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }
    a {
      margin: 5px;
    }

  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    section {
      width: 100%;
      height: 30%;
      h1 {
        margin-top: 1.4em;
      }
    }
    main {
      width: 100%;
      height: 100%;
      form {
        width: 80%;
        height: 80%;
        display: flex;
        flex-direction: column;
        margin-top: -60px;
        input {
          width: 80%;
        }
        textarea {
          width: 80%;
        }
      }
      nav {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
    }
  }
`;
export default Container;
