import styled from 'styled-components';

export const StyledNavigationMenuContainer = styled.div`
  width: 250px;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  .navigation-menu-item {
    margin: 5px;
    padding: 5px;
    box-sizing: border-box;
    cursor: pointer;
  }
`;
