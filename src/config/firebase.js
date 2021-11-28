import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLWf4qYo2IkTNrjrXbHJe_i2a3jbQ0zqk",
  authDomain: "ecommerce-a94ce.firebaseapp.com",
  projectId: "ecommerce-a94ce",
  storageBucket: "ecommerce-a94ce.appspot.com",
  messagingSenderId: "871048589093",
  appId: "1:871048589093:web:9a5878750eafc23b50f4cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {
  auth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
};
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const logOut = () =>
  signOut(auth).then(console.log("Successfully Logged out"));

export const GoogleSignIn = () => signInWithPopup(auth, provider);

export default app;
