import { Dispatch } from "@reduxjs/toolkit";
import { checkingCredentials } from "./AuthSlice";

export const checkingAuthentication = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());
  };
};
