import { all, fork } from "redux-saga/effects";
import authSaga from "./auth-sagas";
import subjectSaga from "./subject-sagas";
import sourceSaga from "./source-sagas";

export default function* rootSaga() {
  yield all([fork(authSaga)]);
  yield all([fork(subjectSaga)]);
  yield all([fork(sourceSaga)]);
}
