import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import { RootState } from '@/data/store';
import { StateInterface } from './RickyAndMorty.types';

const initialState: StateInterface = {
  charactersCount: 0,
  pagesFetched: [],
  numberOfPages: 0,
  data: [],
  status: 'idle',
  error: null,
};

export const fetchRickyAndMorty = createAsyncThunk(
  'rickyAndMorty/fetchRickyAndMorty',
  async (page: number) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    return response.data;
  }
);

const RickyAndMortySlice = createSlice({
  name: 'rickyAndMorty',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRickyAndMorty.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchRickyAndMorty.fulfilled, (state, action) => {
      state.status = 'succeeded';
      if (state.pagesFetched.length === 0) {
        state.charactersCount = action.payload.info.count;
      }
      state.numberOfPages = action.payload.info.pages;
      if (action.payload.info.next) {
        state.pagesFetched = state.pagesFetched.concat(
          parseInt(action.payload.info.next.match(/\d+/g).join(), 10) - 1
        );
      }
      state.data = state.data.concat(action.payload.results);
    });
    builder.addCase(fetchRickyAndMorty.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const selectRickyAndMortyPagesFetched = (state: RootState) =>
  state.rickyAndMorty.pagesFetched;

export const selectRickyAndMortyCharacters = (state: RootState) =>
  state.rickyAndMorty.data;

export const selectRickyAndMortyCharactersCount = (state: RootState) =>
  state.rickyAndMorty.charactersCount;

export const selectRickyAndMortyCharactersByPage = (
  state: RootState,
  page: number
) =>
  state.rickyAndMorty.data.filter(
    (character) =>
      character.id > (page - 1) * 20 && character.id <= (page - 0) * 20
  );

export default RickyAndMortySlice.reducer;
