export interface CollectionData {
  type: string;
  name: string;
  image: string;
  gender?: string;
  species?: string;
}

export interface StateInterface {
  data: CollectionData[];
}
