import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '@/data/store';

interface CollectionData {
  type: string;
  name: string;
  image: string;
  gender?: string;
  species?: string;
}

interface StateInterface {
  data: CollectionData[];
}

const initialState: StateInterface = {
  data: [],
};

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    addToCollection: (state, action: PayloadAction<CollectionData>) => {
      state.data.push(action.payload);
    },
  },
});

export const { addToCollection } = collectionSlice.actions;

export const selectAllCollection = (state: RootState) => state.collection.data;

export const selectItemByName = (state: RootState, name: string) =>
  state.collection.data.find((item) => item.name === name);

export const selectItemByType = (state: RootState, type: string) =>
  state.collection.data.filter((item) => item.type === type).length;

export default collectionSlice.reducer;
