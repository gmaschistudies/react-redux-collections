import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { StyledNavigationMenuContainer } from './NavigationMenu.styles';
import Frost from '@/presentation/assets/frost.png';
import Graph from '@/presentation/assets/graph.png';
import QuestionMark from '@/presentation/assets/question-mark.png';
import NavigationMenuItem from './sub-components/navigation-menu-item/NavigationMenuItem';

const NavigationMenu: FC = (): RE => {
  const history = useHistory();
  const path = history.location.pathname;
  const intl = useIntl();

  return (
    <StyledNavigationMenuContainer>
      <NavigationMenuItem
        image={QuestionMark}
        text="Question Mark"
        handleClick={() =>
          history.push(intl.formatMessage({ id: 'routes.home' }))
        }
        className={
          path === intl.formatMessage({ id: 'routes.home' })
            ? 'selected-menu'
            : ''
        }
      />
      <NavigationMenuItem
        image={Frost}
        text="frost"
        handleClick={() =>
          history.push(intl.formatMessage({ id: 'routes.characters.lists' }))
        }
        className={
          path === intl.formatMessage({ id: 'routes.characters.lists' }) ||
          path.startsWith(
            intl
              .formatMessage({ id: 'routes.characters.page' })
              .substr(
                0,
                intl.formatMessage({ id: 'routes.characters.page' }).length - 3
              )
          )
            ? 'selected-menu'
            : ''
        }
      />
      <NavigationMenuItem
        image={Graph}
        text="Chart"
        handleClick={() =>
          history.push(intl.formatMessage({ id: 'routes.info.graph' }))
        }
        className={
          path === intl.formatMessage({ id: 'routes.info.graph' })
            ? 'selected-menu'
            : ''
        }
      />
    </StyledNavigationMenuContainer>
  );
};

export default NavigationMenu;
