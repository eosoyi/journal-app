import { Dispatch } from "@reduxjs/toolkit";
import { checkingCredentials, login, logout } from "./AuthSlice";
import {
  signInWithGoogle,
  registerUserWithEmailPassword,
  loginWithEmailPassword,
  logoutFirebase
} from "../../firebase/providers.js";
import { clearNotesLogout } from "../journal/journalSlice.js";

export const checkingAuthentication = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result));
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
      return dispatch(logout(response));
    }

    dispatch(login(response));

  };
};

export const startLoginWithEmailPassword = (loginEmail: string, loginPassword: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());

    const response = await loginWithEmailPassword(loginEmail, loginPassword);
    console.log(response);

    if (!response.ok) return dispatch(logout(response));

    dispatch(login(response));
  }
}

export const startLogout = () => {
  return async (dispatch: Dispatch) => {
    await logoutFirebase();
    dispatch(clearNotesLogout());
    dispatch(logout({}));
  }
}
