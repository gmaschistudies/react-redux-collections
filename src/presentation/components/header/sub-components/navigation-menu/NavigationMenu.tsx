import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledNavigationMenuContainer } from './NavigationMenu.styles';

const NavigationMenu: FC = (): RE => {
  const history = useHistory();

  return (
    <StyledNavigationMenuContainer>
      <div
        className="navigation-menu-item"
        role="none"
        onClick={() => history.push('/')}
        onKeyDown={() => history.push('/')}
      >
        Collection
      </div>
      <div
        className="navigation-menu-item"
        role="none"
        onClick={() => history.push('/characters-lists')}
        onKeyDown={() => history.push('/characters-lists')}
      >
        Characters&apos; Lists
      </div>
      <div
        className="navigation-menu-item"
        role="none"
        onClick={() => history.push('/info-graph')}
        onKeyDown={() => history.push('/info-graph')}
      >
        Graph
      </div>
    </StyledNavigationMenuContainer>
  );
};

export default NavigationMenu;
