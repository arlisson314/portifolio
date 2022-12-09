import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  align-items:center;
  justify-content: center;
  >section {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    >h1 {
      font-size: 2.82em;
      margin-right: 0.2ch;
      color: var(--terciary);
      >span {
        color: var(--secundary);
      }
    }
  }
  >main {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    >form {
      width: 90%;
      height: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      >input {
        width: 55%;
        height: 40px;
        padding: 1ch;
        border-radius: 5px;
        margin-bottom: 1ch;
        outline-style: none;
      }
      >textarea {
        width: 55%;
        height: 30%;
        padding: 1ch;
        resize: none;
        border-radius: 5px;
        margin-bottom: 1ch;
        outline-style: none;
      }
      >button {
        width: 55%;
        height: 40px;
        transition: 0.5s;
        font-weight: 500;
        border-radius: 5px;
        text-align: center;
        letter-spacing: 2px;
        color: var(--secundary);
        background: var(--terciary);
      }
      >button:not([disabled]):hover {
        background-color: var(--letters);
        cursor: pointer;
      }
      >button:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }
    nav {
      width: 50%;
      height: 8%;
      display flex;
      justify-content: center;
      align-items: center;
      >a {
        margin: 5px;
        img {
          width: 100%;
          height: 100;
        }
      }
      >a img:hover {
        transition: 0.7s;
        transform: scale(1.1);
      }
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
        width: 100%;
        height: 80%;
        display: flex;
        margin-top: -60px;
        flex-direction: column;
        input {
          width: 80%;
        }
        textarea {
          width: 80%;
        }
      }
      nav {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        a {
          width: 100%;
        }
      }
    }
  }
`;
export default Container;
