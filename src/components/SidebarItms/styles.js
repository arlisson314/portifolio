import styled from 'styled-components';

const Container = styled.div`
  transition: ease-in-out .4s;
  align-items: center;
  margin: 0 15px 20px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  padding: 10px;
  &:hover {
    color: var(--colorHover);
  }
  > svg {
    margin: 0 20px;
  }
`;
export default Container;
