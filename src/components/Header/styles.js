import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  display: flex;
  background-color: var(--secundary); 
  box-shadow: 0 0 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 20px;
    margin-left: 20px;
    cursor: pointer;
    display: none;
  }

  @media screen and (max-width: 768px) {
    svg {
      display: inherit;
      
    }
  }
`;

export const Content = styled.div`
  display: flex;
  margin: auto;
  
  > div {
    align-items: center;
    padding: 0 40px;
    display: flex;
    margin: auto;
    >svg {
      margin: 1ch;
    }
  }

  @media screen and (max-width: 768px) {
      div {
      display: none;
    }
  }
`;
// export default Container;
