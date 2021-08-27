export interface PokemonData {
  id: number;
  name: string;
  image: string;
}

export interface StateInterface {
  pagesFetched: number[];
  data: PokemonData[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}
