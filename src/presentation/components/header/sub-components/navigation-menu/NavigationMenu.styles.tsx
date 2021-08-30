import styled from 'styled-components';

export const StyledNavigationMenuContainer = styled.div`
  max-width: 250px;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  .navigation-menu-item {
    margin: 5px;
    padding: 5px;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    cursor: pointer;
  }

  .menu-item-image {
    width: 90%;
    height: auto;
  }
`;
