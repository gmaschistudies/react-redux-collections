import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import { RootState } from '@/data/store';
import { PokemonData, StateInterface } from './Pokemon.types';

const initialState: StateInterface = {
  pagesFetched: [],
  pokemonCount: 0,
  numberOfPages: 0,
  data: [],
  status: 'idle',
  error: null,
};

export const fetchPokemonsCount = createAsyncThunk(
  'pokemon/fetchPokemonsCount',
  async () => {
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=0&offset=0'
    );
    return response.data.count;
  }
);

export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async (page: number) => {
    const data = fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page - 1) * 20}`
    )
      .then((response) => response.json())
      .then((allPokemon) => {
        return Promise.all(
          allPokemon.results.map(async (pokemon: Record<string, string>) => {
            const response = await fetch(pokemon.url);
            const pokemonData = await response.json();
            return {
              id: pokemonData.id,
              name: pokemonData.name,
              image: pokemonData.sprites.front_default,
            };
          })
        );
      });
    return data as unknown as PokemonData;
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addPageFetched: (state, action: PayloadAction<number>) => {
      state.pagesFetched.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = state.data.concat(action.payload);
    });
    builder.addCase(fetchPokemons.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
    builder.addCase(fetchPokemonsCount.fulfilled, (state, action) => {
      state.pokemonCount = action.payload;
      state.numberOfPages = Math.ceil(state.pokemonCount / 20);
    });
  },
});

export const { addPageFetched } = pokemonSlice.actions;

export const selectPokemons = (state: RootState) => state.pokemon.data;

export const selectPokemonsPagesFetched = (state: RootState) =>
  state.pokemon.pagesFetched;

export const selectPokemonsCount = (state: RootState) =>
  state.pokemon.pokemonCount;

export const selectPokemonsByPage = (state: RootState, page: number) =>
  state.pokemon.data.filter(
    (pokemon) => pokemon.id > (page - 1) * 20 && pokemon.id <= (page - 0) * 20
  );

export default pokemonSlice.reducer;
