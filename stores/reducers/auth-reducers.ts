import { IUserData } from "../../interfaces/user-interfaces";
import { EAuthActions } from "../actions/auth-actions/constants";

type TAuthState = {
  userData: IUserData | null;
};

const initialState: TAuthState = {
  userData: null,
};

const authReducer = (
  state = initialState,
  action: { type: string; payload: any }
): TAuthState => {
  switch (action.type) {
    case EAuthActions.SIGN_IN_SUCCESS: {
      const username = action.payload.email.split("@")[0];

      return {
        ...state,
        userData: { ...action.payload, username },
      };
    }
    case EAuthActions.LOG_OUT_SUCCESS:
      return {
        ...state,
        userData: null,
      };
    default:
      return state;
  }
};

export default authReducer;
