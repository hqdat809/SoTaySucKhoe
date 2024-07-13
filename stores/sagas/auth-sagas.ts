import { logOutService, signInService } from "../../services/auth-services";
// import { toastError } from "../../utils/notifications-utils";
import { Alert } from "react-native";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  logOutFailureAction,
  logOutRequestAction,
  logOutSuccessAction,
  signInFailureAction,
  signInRequestAction,
  signInSuccessAction,
} from "../actions/auth-actions";
import { EAuthActions } from "../actions/auth-actions/constants";
import { TLogOutAction, TSignInAction } from "../actions/auth-actions/types";

function* signInSaga({ payload, cb1 }: TSignInAction) {
  try {
    yield put(signInRequestAction());
    const response = yield call(signInService, payload);
    yield put(signInSuccessAction(response));
    cb1?.(response);
  } catch (error) {
    yield put(signInFailureAction(error));
    const errorCode = error.code;
    const errorMessage = error.message;
    switch (errorCode) {
      case "auth/invalid-email":
        Alert.alert("Lỗi", "Sai email người dùng. Vui lòng nhập lại.");
        break;
      case "auth/invalid-credential":
        Alert.alert(
          "Lỗi",
          "Bạn đã nhập sai tài khoản / mật khẩu. Vui lòng nhập lại."
        );
        break;
      case "auth/user-disabled":
        Alert.alert(
          "Lỗi",
          "Người dùng này đã bị vô hiệu hóa. Vui lòng nhập lại."
        );
        break;
      case "auth/user-not-found":
        Alert.alert(
          "Lỗi",
          "Không tìm thấy địa chỉ email này. Vui lòng nhập lại."
        );
        break;
      case "auth/wrong-password":
        Alert.alert("Error", "Sai mật khẩu. Vui lòng nhập lại.");
        break;
      default:
        Alert.alert("Error", errorMessage);
        break;
    }
  }
}

function* logOutSaga({ cb1 }: TLogOutAction) {
  try {
    yield put(logOutRequestAction());
    yield call(logOutService);
    yield put(logOutSuccessAction());
  } catch (error) {
    yield put(logOutFailureAction(error));
    const errorMessage = error.message;
    Alert.alert("Error", errorMessage);
  }
}

function* watchOnAuth() {
  yield takeLatest(EAuthActions.SIGN_IN, signInSaga);
  yield takeLatest(EAuthActions.LOG_OUT, logOutSaga);
}

export default function* authSaga() {
  yield all([fork(watchOnAuth)]);
}
