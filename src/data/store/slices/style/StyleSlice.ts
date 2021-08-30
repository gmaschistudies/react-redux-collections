import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '@/data/store';

const initialState = {
  darkMode: true,
};

const styleSlice = createSlice({
  name: 'style',
  initialState,
  reducers: {
    changeStyle: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { changeStyle } = styleSlice.actions;

export const selectStyle = (state: RootState) => state.style.darkMode;

export default styleSlice.reducer;
