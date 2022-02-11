import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userEmail: null,
}

const animeSlices = createSlice({
  name: "auth",
  initialState,
  reducers: {
      logIn : (state, action) => {
          state.userEmail = action.payload.email;
          state.userName = action.payload.name;
      },
      logOut: (state, action) => {
          state.userEmail = null;
      }
  }
});

export const {logIn, logOut} = animeSlices.actions

export const user = state => state.auth

export default animeSlices.reducer