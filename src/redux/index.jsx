import { configureStore } from "@reduxjs/toolkit";
import topRatedSlice from "./movies";
export default configureStore({
  reducer: {
    movies: topRatedSlice,
  },
});
