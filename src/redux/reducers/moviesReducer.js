import { createReducer } from "@reduxjs/toolkit";
import * as moviesActions from "../actions/moviesActions";

const initialState = {
  movies: {},
  results: [],
};

const MoviesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(moviesActions.setSearchMovies, (state, { payload }) => ({
      ...state,
      results: payload,
    }))
    .addCase(moviesActions.setMovies, (state, { payload }) => ({
      ...state,
      movies: payload,
    }));
});

export default MoviesReducer;
