import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import { RootState } from '@/data/store';
import { StateInterface } from './RickyAndMorty.types';

const initialState: StateInterface = {
  pagesFetched: [],
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
      state.pagesFetched = state.pagesFetched.concat(
        parseInt(action.payload.info.next.substr(-1), 10) - 1
      );
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

export default RickyAndMortySlice.reducer;
