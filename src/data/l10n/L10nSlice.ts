import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '@/data/store';
import L10n from './L10n';
import { getLocale } from './L10nHelper';
import LocaleRepository from './LocaleRepository';

type L10nType = string;

const initialState: L10nType = getLocale() as L10nType;

export const changeLocale = createAsyncThunk(
  'l10n/changeLocale',
  async (locale: L10nType) => {
    L10n.loadMessages(locale);
    LocaleRepository.set(locale);
    return Promise.resolve(locale);
  }
);

const L10nSlice = createSlice({
  name: 'l10n',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(changeLocale.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectLocale = (state: RootState) => state?.l10n;

export default L10nSlice.reducer;
