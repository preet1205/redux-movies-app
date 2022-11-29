import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_ENDPOINT } from "../movies/movieSlice";

const initialState = {
  movieDetails: {},
  isLoading: false,
};

export const getMovieDetails = createAsyncThunk(
  "singleMovieSlice/getMovieDetails",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(
        `${API_ENDPOINT}${process.env.REACT_APP_API_KEY}&i=${id}&Plot=full`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("SOMETHINK WENT WRONG");
    }
  }
);

const singleMovieSlice = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {
    removeDetails: (state) => {
      state.movieDetails = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovieDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovieDetails.fulfilled, (state, { payload }) => {
        state.movieDetails = payload;
        state.isLoading = false;
      })
      .addCase(getMovieDetails.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { removeDetails } = singleMovieSlice.actions;

export default singleMovieSlice.reducer;
