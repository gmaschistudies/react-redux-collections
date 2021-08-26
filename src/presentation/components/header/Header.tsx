import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import NavigationMenu from './sub-components/navigation-menu/NavigationMenu';
import { StyledHeaderContainer } from './Header.styles';
import StyleSwitcher from './sub-components/style-switcher/StyleSwitcher';

const Header: FC = (): RE => {
  return (
    <StyledHeaderContainer>
      <StyleSwitcher />
      <NavigationMenu />
    </StyledHeaderContainer>
  );
};

export default Header;
