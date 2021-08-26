import { Redirect, Route, Router, Switch } from 'react-router-dom';
import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useIntl } from 'react-intl';
import L10n from '@/data/l10n/L10n';
import history from '../history/history';
import { Home } from '@/presentation/pages';

const HomeRedirect = (
  <Redirect
    to={{
      pathname: L10n.formatMessage({ id: 'routes.home' }),
    }}
  />
);

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
        {HomeRedirect}
      </Switch>
    </Router>
  );
};

export default Routes;
