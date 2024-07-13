// import auth from "@react-native-firebase/auth";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app, auth } from "./firebaseConfig";

export const doSignInWithEmailAndPassword = async (payload: any) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const doLogOut = async () => {
  await signOut(auth)
    .then(() => {})
    .catch((error) => {
      console.error("Error signing out:", error);
    });
};
