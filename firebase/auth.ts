// import auth from "@react-native-firebase/auth";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
} from "firebase/auth";
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

export const doUpdatePassword = async (password: string) => {
  const auth = getAuth();

  const user = auth.currentUser;
  const newPassword = password;
  if (user) {
    await updatePassword(user, newPassword)
      .then(() => {
        console.log("User updated successfully");
      })
      .catch((error) => {
        console.log("Error updating password", error);
      });
  }
};

export const doLogOut = async () => {
  await signOut(auth)
    .then(() => {})
    .catch((error) => {
      console.error("Error signing out:", error);
    });
};
