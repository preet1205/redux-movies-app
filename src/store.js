import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/movieSlice";
import movieDetailReducer from "./features/singleMovie/singleMovieSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movieDetail: movieDetailReducer,
  },
});
