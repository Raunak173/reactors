import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./redux/videoSlice";

export const store = configureStore({
  reducer: {
    videos: videoReducer,
  },
});
