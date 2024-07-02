import { Dispatch } from "@reduxjs/toolkit";
import { checkingCredentials, login, logout } from "./AuthSlice";
import {
  signInWithGoogle,
  registerUserWithEmailPassword,
} from "../../firebase/providers.js";

export const checkingAuthentication = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.message));
    dispatch(login(result));
  };
};

export const startCreatingUserWhitEmailPassword = (
  email: string,
  password: string,
  displayName: string
) => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());

    const response = await registerUserWithEmailPassword(
      email,
      password,
      displayName
    );

    if (!response.ok) {
      return dispatch(logout(response.errorMessage));
    }

    dispatch(login(response));

  };
};
