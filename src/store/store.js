import { configureStore } from '@reduxjs/toolkit';
import listReducer from './list-slice/list-slice';

export const store = configureStore({
  reducer: {
    list: listReducer,
  },
});
