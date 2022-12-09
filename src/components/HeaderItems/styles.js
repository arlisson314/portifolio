import styled from 'styled-components';

const Container = styled.div`
  a {
    cursor: pointer;
    font-size: 20px;
    border-radius: 2px;
    color: var(--letters);
    display: flex;
    justify-content: center;
    height: 44px;
    align-items: center;
    margin: 1ch;
    p {
      margin-left: 5px;
    }
  }


  &:hover {
    background-color: var(--terciary);
    color: var(--secundary);
  }
`;
export default Container;
