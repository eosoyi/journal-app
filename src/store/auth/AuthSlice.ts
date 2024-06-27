import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  status: string;
  uid?: string | null;
  email?: string | null;
  displayName?: string | null;
  photoURL?: string | null;
  errorMessage?: string | null;
}

const initialState: CounterState = {
  status: "not-authenticated",
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
    login: (state, action) => {},
    logout: (state, payload) => {},
    checkingCredentials: (state) => {
      state.status = "ckecking";
    },
  },
});

export const { login, logout, checkingCredentials } = AuthSlice.actions;

export default AuthSlice.reducer;
