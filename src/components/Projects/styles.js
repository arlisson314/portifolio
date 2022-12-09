import styled from 'styled-components';

const Container = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--secundary);
  margin-top: 4em;
  >section {
    width: 33%;
    display: flex;
    justify-content: center;
    font-size: 2em;
    >h1 span {
      color: var(--terciary);
      margin-right: 0.2ch;
    }
  }
  >main {
    width: 60%;
    /* height: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    >div {
      display: flex;
      width: 20%;
      margin: 8px;
      flex-direction: column;
      >img {
        width:100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
      >button {
        padding: 1ch;
        font-weight: 500;
        color: var(--secundary);
        background-color: var(--terciary);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        transition: 0.5s;
      }
      >button:hover {
        background-color: var(--letters);
        cursor: pointer;
      }
    }
    div:hover {
      transform: scale(1.1);
      transition: 0.7s;
    }
    
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    main {
      width: 100%;
      flex-wrap: wrap;
      div {
        display: flex;
        width: 60%;
        margin: 5px;
        flex-direction: column;
      }
    }
  }

  @media screen and (max-width: 430px) {
    height: 100%;
    padding-top: 4em;
    display: flex;
    flex-direction: column;
    section {
      width: 4%;
    }
    main {
      width: 100%;
    }
  }
`;

export default Container;
