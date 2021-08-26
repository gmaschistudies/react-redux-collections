import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { Provider } from 'react-redux';
import IntlProvider from '@/data/l10n/IntlProvider';
import store from './data/store';
import Routes from './main/routes/routes';

const App: FC = (): RE => {
  return (
    <Provider store={store}>
      <IntlProvider>
        <Routes />
      </IntlProvider>
    </Provider>
  );
};

export default App;
