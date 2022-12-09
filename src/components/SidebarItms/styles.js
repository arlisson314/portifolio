import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--terciary); 
  font-size: 20px;
  color: var(--secundary);
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;

  > svg {
    margin: 0 20px;
  }

  /* &:hover {
    background-color: black;
  } */
`;
export default Container;
