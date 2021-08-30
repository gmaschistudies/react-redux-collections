import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import IntlProvider from '@/data/l10n/IntlProvider';
import store, { persistor } from './data/store';
import Routes from './main/routes/routes';

const App: FC = (): RE => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IntlProvider>
          <Routes />
        </IntlProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
