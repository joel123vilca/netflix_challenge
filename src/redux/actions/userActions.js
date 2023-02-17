import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const types = {
  POST_LOGIN: "POST_LOGIN",
  SET_USER: "SET_USER",
  POST_CREATE_USER: "POST_CREATE_USER",
};

export const postLogin = createAsyncThunk(
  types.POST_LOGIN,
  ({ payload }, { dispatch }) => {
    const errors = {
      email: false,
      password: false,
    };
    if (payload.email !== "admin@gmail.com") {
      errors.email = true;
      return errors;
    }
    if (payload.password !== "admin123") {
      errors.password = true;
      return errors;
    }
    dispatch(setUser(payload));
    return;
  }
);
export const setUser = createAction(types.SET_USER, (user) => ({
  payload: user,
}));

// export const postCreateUser = createAsyncThunk(
//   types.POST_CREATE_USER,
//   async ({ payload }, { dispatch }) => {
//     const response = await MoviesController.getSearchMovies(payload);
//     dispatch(setSearchMovies(response));
//     return response;
//   }
// );
