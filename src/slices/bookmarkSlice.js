import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    userEmail: null,
    anime: {},
    bookmark: []
}

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
      addBookmark: (state,action) => {
            state.bookmark = [...state.bookmark, action.payload]        
      },
      deleteBookmark: (state, action) => {
          const index = state.bookmark.findIndex(index => index.id === action.payload.id);
          let newBookmark;
          newBookmark = [...state.bookmark];
          if(state.bookmark.length > 0){
              newBookmark.splice(index, 1)
          }
          state.bookmark = newBookmark;
      },
      loadAnimeBookmark: (state, action) => {
          state.anime = state.payload
      }
  }
});

export const {addBookmark, deleteBookmark, loadAnimeBookmark} = bookmarkSlice.actions

export const bookmarkAnime = state => state.bookmark

export default bookmarkSlice.reducer