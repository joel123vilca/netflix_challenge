import { createReducer } from "@reduxjs/toolkit";
import * as userActions from "../actions/userActions";

const initialState = {
  user: null,
};

const UserReducer = createReducer(initialState, (builder) => {
  builder.addCase(userActions.setUser, (state, { payload }) => ({
    ...state,
    user: payload,
  }));
});

export default UserReducer;
