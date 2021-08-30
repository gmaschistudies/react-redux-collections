import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledNavigationMenuContainer } from './NavigationMenu.styles';
import Frost from '@/presentation/assets/frost.png';
import Graph from '@/presentation/assets/graph.png';
import QuestionMark from '@/presentation/assets/question-mark.png';
import NavigationMenuItem from './sub-components/navigation-menu-item/NavigationMenuItem';

const NavigationMenu: FC = (): RE => {
  const history = useHistory();
  const path = history.location.pathname;
  console.log(path);

  return (
    <StyledNavigationMenuContainer>
      <NavigationMenuItem
        image={QuestionMark}
        text="Question Mark"
        handleClick={() => history.push('/')}
        className={path === '/' ? 'selected-menu' : ''}
      />
      <NavigationMenuItem
        image={Frost}
        text="frost"
        handleClick={() => history.push('/characters-lists')}
        className={
          path === '/characters-lists' || path.startsWith('/characters-page')
            ? 'selected-menu'
            : ''
        }
      />
      <NavigationMenuItem
        image={Graph}
        text="Chart"
        handleClick={() => history.push('/info-graph')}
        className={path === '/info-graph' ? 'selected-menu' : ''}
      />
    </StyledNavigationMenuContainer>
  );
};

export default NavigationMenu;
