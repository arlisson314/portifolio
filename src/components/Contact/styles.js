import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  align-items:center;
  justify-content: center;
  >section {
    width: 35%;
    height: 30%;
    display: flex;
    flex-direction: column;
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
    >div {
      width: 55%;
      height: 45%;
      margin-top: 0.2em; 
      >h3 {
        color: var(--terciary);
        >span {
          color: var(--secundary);
        }
      }
    }
  }
  >main {
    width: 60%;
    height: 60%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    >form {
      width: 90%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      >input {
        width: 55%;
        height: 45px;
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
        margin: 0 5px;
        display: flex;
        align-items: center;
        img {
          width: 100%;
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
    max-height: 100%;
    section {
      width: 90%;
      height: 40%;
      h1 {
        margin-top: 1.5em;
      }
      >div {
        width: 80%;
        height: 35%;
        border: solid 1px red;
        h3 {
          font-size: 0.8em;
        }
      }
    }
    main {
      width: 90%;
      height: 80%;
      form {
        width: 100%;
        height: 95%;
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
        width: 90%;
        margin-top: -3em;
        a img {
          height: 30px;
        }
      }
    }
  }
`;
export default Container;
