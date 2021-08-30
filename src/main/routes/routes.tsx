import { Redirect, Route, Router, Switch } from 'react-router-dom';
import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useIntl } from 'react-intl';
import L10n from '@/data/l10n/L10n';
import history from '../history/history';
import {
  Home,
  CharactersLists,
  CharactersPage,
  InfoGraphPage,
} from '@/presentation/pages';

const HomeRedirect = (
  <Redirect
    to={{
      pathname: L10n.formatMessage({ id: 'routes.home' }),
    }}
  />
);

// "routes.characters-page.pokemon": "/characters-page/pokemon",
// "routes.characters-page.ricky-and-morty": "/characters-page/ricky-and-morty"

const Routes: FC = (): RE => {
  const intl = useIntl();

  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path={intl.formatMessage({ id: 'routes.home' })}
          component={Home}
        />
        <Route
          exact
          path={intl.formatMessage({ id: 'routes.characters-lists' })}
          component={CharactersLists}
        />
        <Route
          exact
          path={intl.formatMessage({ id: 'routes.characters-page' })}
          component={CharactersPage}
        />
        <Route
          exact
          path={intl.formatMessage({ id: 'routes.info-graph' })}
          component={InfoGraphPage}
        />
        {HomeRedirect}
      </Switch>
    </Router>
  );
};

export default Routes;
