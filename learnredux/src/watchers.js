import { all } from "redux-saga/effects";
import { watcherStudent } from "./watcherStudent";

export default function* rootSaga() {
  yield all([watcherStudent()]);
}
