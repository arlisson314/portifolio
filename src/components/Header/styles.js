import styled from 'styled-components';

export const Container = styled.div`
  box-shadow:  10px 0px 10px #777777, -10px -10px 10px #ffffff;
  background-color: var(--primary); 
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  display: flex;
  height: 70px;
  z-index: 999;
  width: 100%;
  left: 0;
  top: 0;
  
  
  > svg {
    transition: ease-in-out .4s;
    cursor: pointer;
    display: none;

    &:hover {
      color: var(--colorHover);
    }
  }

  @media screen and (max-width: 900px) {
    justify-content: space-between;
    >h3 {
      margin: 20px;
    }
    >svg {
      margin-right: 20px;
      display: inherit;
    }
  }
`;

export const Content = styled.div`
  justify-content: flex-end;
  display: flex;
  width: 85%;
  > div {
    align-items: center;
    margin: 0 20px;
    display: flex;
    >svg {
      margin: 1ch;
    }
  }

  @media screen and (max-width: 900px) {
    display: none;
    margin-right: 10px;
  }
`;
