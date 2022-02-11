import { configureStore } from '@reduxjs/toolkit';
import animeReducer from "../slices/animeSlices";
import bookmarkReducer from "../slices/bookmarkSlice"


export const store = configureStore({
  reducer: {
    bookmark: bookmarkReducer,
    auth: animeReducer
  },
});
