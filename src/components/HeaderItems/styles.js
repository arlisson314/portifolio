import styled from 'styled-components';

const Container = styled.div`
  a {
    cursor: pointer;
    transition: ease-in-out .4s;
    justify-content: flex-end;
    align-items: center;
    font-size: 20px;
    display: flex;
    p {
      margin-left: 0.4ch;
    }
  }

  &:hover {
    color: var(--colorHover);
  }
`;
export default Container;
