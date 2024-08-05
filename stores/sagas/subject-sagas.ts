// import { toastError } from "../../utils/notifications-utils";
import { Alert } from "react-native";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { getSubjectService } from "../../services/subject-services";
import {
  getSubjectAction,
  getSubjectFailureAction,
  getSubjectRequestAction,
  getSubjectSuccessAction,
} from "../actions/subject-actions";
import { ESubjectAction } from "../actions/subject-actions/constants";
import { TGetSubjectAction } from "../actions/subject-actions/types";

function* getSubjectSaga({ cb1 }: TGetSubjectAction) {
  try {
    yield put(getSubjectRequestAction());
    const response = yield call(getSubjectService);
    yield put(getSubjectSuccessAction(response));
    cb1?.();
  } catch (error: any) {
    yield put(getSubjectFailureAction(error));
    const errorCode = error.code;
    const errorMessage = error.message;
    Alert.alert("Error", errorMessage);
  }
}

function* watchOnAuth() {
  yield takeLatest(ESubjectAction.GET_SUBJECT, getSubjectSaga);
}

export default function* subjectSaga() {
  yield all([fork(watchOnAuth)]);
}
