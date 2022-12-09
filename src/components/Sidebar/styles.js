import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1;
  background-color: var(--secundary);
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  left: ${(props) => (props.sidebar ? 'auto' : '-100%')};
  animation: showSidebar .4s;


  > svg {
    position: fixed;
    fill: var(--letters);
    width: 30px;
    height: 30px;
    margin-top: 20px;
    margin-left: 20px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;
