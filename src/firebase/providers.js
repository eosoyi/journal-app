import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const user = result.user;
    const { displayName, email, photoURL, uid } = user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const erroCode = error.code;
    const erroMessage = error.message;
    return {
      ok: false,
      erroMessage,
    };
  }
};

export const registerUserWithEmailPassword = async (
  emailRegister,
  passwordRegister,
  displayNameRegister
) => {
  try {
    const response = await createUserWithEmailAndPassword(
      FirebaseAuth,
      emailRegister,
      passwordRegister
    );
    const data = response.user;
    const { uid, photoURL, email, displayName } = data;

    // FirebaseAuth.currentUser nos devuelve el usuario logeado
    await updateProfile(FirebaseAuth.currentUser, {
      displayName: displayNameRegister,
    });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};
