export interface RickyAndMortyData {
  id: number;
  name: string;
  gender: string;
  species: string;
  image: string;
}

export interface StateInterface {
  pagesFetched: number[];
  data: RickyAndMortyData[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}
