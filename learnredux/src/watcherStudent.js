import {
  takeLeading,
  takeLatest,
  takeEvery,
  select,
  put,
  take,
  all,
  call,
  fork,
  delay,
  spawn,
} from "redux-saga/effects";
import * as Actions from "./actionTypes";

export function* watcherStudent() {
  yield takeEvery(Actions.I_WILL_BE_THE_BEST_DEV, workerIWillBeTheBest);
  yield takeLeading(Actions.TEST_TAKE_LOADING, workerTestTakeLeading);
  yield takeLatest(Actions.TEST_TAKE_LASTEST, workerTestTakeLatest);
  yield takeEvery(Actions.TEST_TAKE_EVERY, workerTestTakeEvery);
  yield takeEvery(Actions.TEST_YIELD_PUT, workerTestYieldPut);
  yield takeEvery(Actions.TEST_YIELD_SPAWN_FORK, workerTestYieldSpawnFork);
  yield takeLeading(Actions.TEST_YIELD_CALL, workerTestYieldCall);
}
function* workerTestTakeLeading(action) {
  try {
    console.log("toi dang chay workerTestTakeLeading");
    yield delay(2000);
  } catch (error) {}
}
function* workerIWillBeTheBest(action) {
  try {
    yield;
    console.log("Toi dan trong worker watcher");
  } catch (error) {}
}
function* workerTestTakeLatest(action) {
  try {
    yield delay(2000);
    console.log("toi dang chay workerTestTakeLatest");
  } catch (error) {}
}
function* workerTestTakeEvery(action) {
  try {
    // const varStudent = yield select((state) => state.studentReducer.student);
    // console.log("dữ liệu của students khi được khởi tạo store là", varStudent);
    yield put({
      type: Actions.TEST_YIELD_PUT,
    });
    let res = yield take(Actions.TEST_YIELD_TAKE);
    console.log(res);
  } catch (error) {}
}
// function* workerTestYieldPut(action) {
//   try {
//     yield;
//     console.log("toi dang workerTestYieldPut ");
//   } catch (error) {}
// }

function* workerTestYieldPut(action) {
  try {
    console.log("toi dang workerTestYieldPut");
    yield put({
      type: Actions.TEST_YIELD_TAKE,
      data: {
        myNiceName: "I'll become the best Tomaho Dev",
      },
    });
  } catch (error) {}
}
function* workerTestYieldSpawnFork(action) {
  try {
    yield fork(workerSpawnOrForIt, {});
    yield spawn(workerSpawnOrForIt, {});
    console.log("Toi dang trong workerTestYieldSpawnFork");
  } catch (e) {}
}
function* workerSpawnOrForIt(action) {
  try {
    yield delay(1000);
    console.log("Toi dang trong workerSpawnOrForIt");
  } catch (error) {}
}

function* workerTestYieldCall(action) {
  try {
    let response = yield call(workerDoAPI);
    console.log(response);
  } catch (error) {}
}
function* workerDoAPI(action) {
  try {
    return { myName: "Tomaho-er" };
  } catch (error) {}
}
