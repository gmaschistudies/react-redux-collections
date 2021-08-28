export interface PokemonData {
  id: number;
  name: string;
  image: string;
}

export interface StateInterface {
  pokemonCount: number;
  pagesFetched: number[];
  numberOfPages: number;
  data: PokemonData[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}
