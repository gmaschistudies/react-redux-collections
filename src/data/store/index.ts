import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// eslint-disable-next-line import/no-cycle
import l10n from '@/data/l10n/L10nSlice';
// eslint-disable-next-line import/no-cycle
import pokemon from './slices/pokemon/PokemonSlice';
// eslint-disable-next-line import/no-cycle
import rickyAndMorty from './slices/ricky-and-morty/RickyAndMortySlice';
// eslint-disable-next-line import/no-cycle
import collection from './slices/collection/CollectionSlice';
// eslint-disable-next-line import/no-cycle
import style from './slices/style/StyleSlice';

const rootReducer = combineReducers({
  l10n,
  pokemon,
  rickyAndMorty,
  collection,
  style,
});

const persistConfig = {
  key: 'collection',
  version: 1,
  storage,
  whitelist: ['collection', 'style'],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export type RootStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export { persistor };

export default store;
