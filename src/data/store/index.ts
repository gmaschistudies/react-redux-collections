import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import L10nSlice from '@/data/l10n/L10nSlice';

const store = configureStore({
  reducer: {
    l10n: L10nSlice,
  },
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
