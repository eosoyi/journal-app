// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8KUqpgRcD3_SuBR9VxEvX1uvBD9r3sQQ",
  authDomain: "react-cursos-df9f7.firebaseapp.com",
  projectId: "react-cursos-df9f7",
  storageBucket: "react-cursos-df9f7.appspot.com",
  messagingSenderId: "555142909604",
  appId: "1:555142909604:web:8c56cd56a59c2df3376031",
};

// Initialize Firebase
export const FirebaseAPP = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseAPP);
export const FirebaseDB = getFirestore(FirebaseAPP);
