import { put, takeEvery, all } from "redux-saga/effects";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Our worker Saga: will perform the async increment task
export function* incrementAsync(action) {
  yield delay(5000);
  // API call
  // const res = await apiCall();
  if (true) {
    yield put({ type: "ADD_SUCCESS", payload: 1 });
  } else {
    yield put({ type: "ADD_FAILURE", payload: "" });
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each ADD
export function* watchIncrementAsync() {
  yield takeEvery("ADD_REQUEST", incrementAsync);
}

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
