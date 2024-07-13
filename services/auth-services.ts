import { doLogOut, doSignInWithEmailAndPassword } from "./../firebase/auth";
import { TSignInRequest } from "../interfaces/user-interfaces";

export const signInService = (payload: TSignInRequest) => {
  return doSignInWithEmailAndPassword(payload)
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
