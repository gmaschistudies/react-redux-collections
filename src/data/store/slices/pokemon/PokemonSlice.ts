import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '@/data/store';
import { PokemonData, StateInterface } from './Pokemon.types';

const initialState: StateInterface = {
  pagesFetched: [],
  data: [],
  status: 'idle',
  error: null,
};

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
  },
});

export const { addPageFetched } = pokemonSlice.actions;

export const selectPokemons = (state: RootState) => state.pokemon.data;

export const selectPokemonsPagesFetched = (state: RootState) =>
  state.pokemon.pagesFetched;

export default pokemonSlice.reducer;
