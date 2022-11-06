import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "youtube",
};

export const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setQuery } = videoSlice.actions;

export const selectQuery = (state) => state.videos.query;

export default videoSlice.reducer;
