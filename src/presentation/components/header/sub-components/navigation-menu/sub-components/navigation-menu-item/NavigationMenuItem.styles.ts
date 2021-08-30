import styled from 'styled-components';

export const StyledNavigationMenuItemContainer = styled.div`
  margin: 5px;
  padding: 5px;
  height: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  border-bottom: ${(props) => (props.className ? '2px solid #666' : '')};

  .menu-item-image {
    width: 90%;
    height: auto;

    transition: 0.8s;

    &:hover {
      transform: scale(0.8);
    }
  }
`;
