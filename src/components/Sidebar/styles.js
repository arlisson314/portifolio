import styled from 'styled-components';

export const Container = styled.div`
  left: ${(props) => (props.sidebar ? 'auto' : '-100%')};
  background-color: var(--primary);
  animation: showSidebar .4s;
  justify-content: center;
  text-align: center;
  position: fixed;
  display: flex;
  height: 100%;
  width: 100%;
  z-index: 1;
  left: 0px;
  top: 0px;
  
  > svg {
    margin-left: 93%;
    margin-top: 20px;
    position: fixed;
    cursor: pointer;
    height: 30px;
    width: 30px;
    &:hover {
      color: var(--colorHover);
    }
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 600px) {
    >svg {
      margin-left: 85%;
    }
  }
  `;

export const Content = styled.div`
  margin-top: 100px;
`;
