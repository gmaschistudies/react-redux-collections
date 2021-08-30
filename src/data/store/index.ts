import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import L10nSlice from '@/data/l10n/L10nSlice';
// eslint-disable-next-line import/no-cycle
import PokemonSlice from '@/data/store/slices/pokemon/PokemonSlice';
// eslint-disable-next-line import/no-cycle
import RickyAndMortySlice from '@/data/store/slices/ricky-and-morty/RickyAndMortySlice';
// eslint-disable-next-line import/no-cycle
import CollectionSlice from '@/data/store/slices/collection/CollectionSlice';
import {
  localStorageMiddleware,
  reHydrateStore,
} from '@/data/store/middleware';

const store = configureStore({
  reducer: {
    l10n: L10nSlice,
    collection: CollectionSlice,
    pokemon: PokemonSlice,
    rickyAndMorty: RickyAndMortySlice,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
