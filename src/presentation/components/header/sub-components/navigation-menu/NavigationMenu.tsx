import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledNavigationMenuContainer } from './NavigationMenu.styles';

const NavigationMenu: FC = (): RE => {
  const history = useHistory();

  return (
    <StyledNavigationMenuContainer>
      <div
        role="none"
        onClick={() => history.push('/')}
        onKeyDown={() => history.push('/')}
      >
        Menu 1
      </div>
      <div
        role="none"
        onClick={() => history.push('characters-lists')}
        onKeyDown={() => history.push('/characters-lists')}
      >
        Menu 2
      </div>
      <div>Menu 3</div>
    </StyledNavigationMenuContainer>
  );
};

export default NavigationMenu;
