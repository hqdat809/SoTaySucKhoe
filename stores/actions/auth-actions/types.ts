import {
  TAuthToken,
  TSignInRequest,
} from "../../../interfaces/user-interfaces";
import { EAuthActions } from "./constants";

export type TSignInAction = {
  type: EAuthActions.SIGN_IN;
  payload: TSignInRequest;
  cb1?: (currentUser: any) => void;
};

export type TLogOutAction = {
  type: EAuthActions.LOG_OUT;
  cb1?: () => void;
};
