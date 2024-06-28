import { Dispatch } from "@reduxjs/toolkit";
import { checkingCredentials, login, logout } from "./AuthSlice";
import { signInWithGoogle } from '../../firebase/providers.js'

export const checkingAuthentication = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    console.log(result)
    if (!result.ok) return dispatch(logout(result.message));
    //delete result.ok;
    dispatch(login(result));
  };
};
