import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const API_ENDPOINT = "http://www.omdbapi.com/?apikey=";

const initialState = {
  moviesList: [],
  isLoading: false,
  isError: false,
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (movieSearch, thunkAPI) => {
    try {
      const res = await axios.get(
        `${API_ENDPOINT}${process.env.REACT_APP_API_KEY}&s=${movieSearch}&type=movie`
      );
      return res.data.Search;
    } catch (error) {
      return thunkAPI.rejectWithValue("SOMETHING WENT WRONG");
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.moviesList = payload;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { addMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
