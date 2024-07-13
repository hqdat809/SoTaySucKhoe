// import { toastError } from "../../utils/notifications-utils";
import { Alert } from "react-native";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  getAllSourceService,
  getSourceBySubjectService,
  searchSourceService,
} from "../../services/source-services";
import {
  getAllSourceFailureAction,
  getAllSourceRequestAction,
  getAllSourceSuccessAction,
  getSourceFailureAction,
  getSourceRequestAction,
  getSourceSuccessAction,
  searchSourceFailureAction,
  searchSourceRequestAction,
  searchSourceSuccessAction,
} from "../actions/source-actions";
import { ESourceAction } from "../actions/source-actions/constants";
import {
  TGetAllSourceAction,
  TGetSourceAction,
  TSearchSourceAction,
} from "../actions/source-actions/types";

function* getSourceSaga({ payload, cb1 }: TGetSourceAction) {
  try {
    yield put(getSourceRequestAction());
    const response = yield call(getSourceBySubjectService, payload);
    yield put(getSourceSuccessAction(response));
    cb1?.();
  } catch (error) {
    yield put(getSourceFailureAction(error));
    const errorCode = error.code;
    const errorMessage = error.message;
    Alert.alert("Error", errorMessage);
  }
}

function* getAllSourceSaga({ cb1 }: TGetAllSourceAction) {
  try {
    yield put(getAllSourceRequestAction());
    const response = yield call(getAllSourceService);
    yield put(getAllSourceSuccessAction(response));
    cb1?.();
  } catch (error) {
    yield put(getAllSourceFailureAction(error));
    const errorCode = error.code;
    const errorMessage = error.message;
    Alert.alert("Error", errorMessage);
  }
}

function* searchSourceSaga({ payload }: TSearchSourceAction) {
  try {
    yield put(searchSourceRequestAction());
    const response = yield call(searchSourceService, payload);
    yield put(searchSourceSuccessAction(response));
  } catch (error) {
    yield put(searchSourceFailureAction(error));
    const errorCode = error.code;
    const errorMessage = error.message;
    Alert.alert("Error", errorMessage);
  }
}

function* watchOnAuth() {
  yield takeLatest(ESourceAction.GET_SOURCE, getSourceSaga);
  yield takeLatest(ESourceAction.GET_ALL_SOURCE, getAllSourceSaga);
  yield takeLatest(ESourceAction.SEARCH_SOURCE, searchSourceSaga);
}

export default function* sourceSaga() {
  yield all([fork(watchOnAuth)]);
}
