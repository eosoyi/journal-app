import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  status: string;
  uid?: string | null;
  email?: string | null;
  displayName?: string | null;
  photoURL?: string | null;
  errorMessage?: string | null;
}

const initialState: CounterState = {
  status: "checking",
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const AuthSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated",
        state.uid = payload.uid,
        state.email = payload.email,
        state.displayName = payload.displayName,
        state.photoURL = payload.photoURL,
        state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      state.status = "no-authenticated",
        state.uid = null,
        state.email = null,
        state.displayName = null,
        state.photoURL = null,
        state.errorMessage = payload.message;
    },
    checkingCredentials: (state) => {
      state.status = "ckecking";
    },
  },
});

export const { login, logout, checkingCredentials } = AuthSlice.actions;

export default AuthSlice.reducer;
