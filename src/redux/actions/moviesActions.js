import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import MoviesController from "../controllers/moviesController";

export const types = {
  GET_MOVIES: "GET_MOVIES",
  SET_MOVIES: "SET_MOVIES",
  GET_SEARCH_MOVIES: "GET_SEARCH_MOVIES",
  SET_SEARCH_MOVIES: "SET_SEARCH_MOVIES",
};

export const getMovies = createAsyncThunk(
  types.GET_MOVIES,
  async (_, { dispatch }) => {
    const response = await MoviesController.getMovies();
    dispatch(setMovies(response));
    return response;
  }
);
export const setMovies = createAction(types.SET_MOVIES, (movies) => ({
  payload: movies,
}));

export const getSearchMovies = createAsyncThunk(
  types.GET_SEARCH_MOVIES,
  async (payload, { dispatch }) => {
    const response = await MoviesController.getSearchMovies(payload);
    dispatch(setSearchMovies(response));
    return response;
  }
);
export const setSearchMovies = createAction(
  types.SET_SEARCH_MOVIES,
  (movies) => ({
    payload: movies,
  })
);
