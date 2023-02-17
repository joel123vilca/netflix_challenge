import { createSelector } from "@reduxjs/toolkit";

export const moviesStateSelector = createSelector(
  (state) => state.movies,
  (movies) => movies
);

export const moviesSelector = createSelector(
  moviesStateSelector,
  (state) => state.movies
);

export const resultsSelector = createSelector(
  moviesStateSelector,
  (state) => state.results
);
