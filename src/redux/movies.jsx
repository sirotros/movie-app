import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTopRatedMovies = createAsyncThunk(
  "topRated/topRated",
  async () => {
    const language = localStorage.getItem("lang");
    return await axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=2493388580051618524feeace9a4f94a&language=${language}`
      )
      .then((response) => response.data);
  }
);
export const getPopularMovies = createAsyncThunk(
  "popularMovies/popularMovies",
  async () => {
    const language = localStorage.getItem("lang");
    return await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=2493388580051618524feeace9a4f94a&language=${language}`
      )
      .then((response) => response.data);
  }
);

export const topRated = createSlice({
  name: "topRated",
  initialState: {
    topRatedMovies: null,
    popularMovies: null,
  },

  extraReducers(builder) {
    builder.addCase(getTopRatedMovies.fulfilled, (state, action) => {
      state.topRatedMovies = action.payload;
    });
    builder.addCase(getPopularMovies.fulfilled, (state, action) => {
      state.popularMovies = action.payload;
    });
  },
});

export default topRated.reducer;
