import { createSelector } from "@reduxjs/toolkit";

export const userStateSelector = createSelector(
  (state) => state.user,
  (user) => user
);

export const userSelector = createSelector(
  userStateSelector,
  (state) => state.user
);
