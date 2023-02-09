import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isVisiblePopup: false,
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    showPopup: (state, action) => {
      state.isVisiblePopup = action.payload;
    },
    filterList: (state, action) => {
      state.items = state.items.filter((item) => item.isChecked === false);
    },
    updateItem: (state, action) => {
      state.items = [
        ...state.items.slice(0, Number(action.payload)),
        {
          ...state.items[Number(action.payload)],
          isChecked: !state.items[Number(action.payload)].isChecked,
        },
        ...state.items.slice(Number(action.payload) + 1),
      ];
    },
  },
});

export const { addItem, showPopup, updateItem } = listSlice.actions;

export default listSlice.reducer;
