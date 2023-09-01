import { createSlice } from '@reduxjs/toolkit';

const initFilter = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initFilter,
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
