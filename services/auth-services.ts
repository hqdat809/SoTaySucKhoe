import {
  doLogOut,
  doSignInWithEmailAndPassword,
  doUpdatePassword,
} from "./../firebase/auth";
import {
  TChangePasswordRequest,
  TSignInRequest,
} from "../interfaces/user-interfaces";
import { auth } from "../firebase/firebaseConfig";

export const signInService = (payload: TSignInRequest) => {
  return doSignInWithEmailAndPassword(payload)
    .then((response) => {
      return Promise.resolve(response);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const changePasswordService = (payload: string) => {
  return doUpdatePassword(payload)
    .then((response) => {
      return Promise.resolve(response);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const logOutService = () => {
  return doLogOut()
    .then(() => {
      return Promise.resolve();
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
