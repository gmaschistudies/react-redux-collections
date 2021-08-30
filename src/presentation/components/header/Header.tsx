import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import NavigationMenu from './sub-components/navigation-menu/NavigationMenu';
import { StyledHeaderContainer } from './Header.styles';
import StyleSwitcher from './sub-components/style-switcher/StyleSwitcher';
import { useAppSelector } from '@/data/store/hooks';
import { selectStyle } from '@/data/store/slices/style/StyleSlice';

const Header: FC = (): RE => {
  const darkMode = useAppSelector(selectStyle);

  return (
    <StyledHeaderContainer theme={darkMode}>
      <StyleSwitcher />
      <NavigationMenu />
    </StyledHeaderContainer>
  );
};

export default Header;
