import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledNavigationMenuContainer } from './NavigationMenu.styles';

const NavigationMenu: FC = (): RE => {
  return (
    <StyledNavigationMenuContainer>
      <div>Menu 1</div>
      <div>Menu 2</div>
      <div>Menu 3</div>
    </StyledNavigationMenuContainer>
  );
};

export default NavigationMenu;
