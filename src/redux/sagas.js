import { put, takeEvery, all } from "redux-saga/effects";
import {
  GET_USERS_FAILED,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from "./actions/actionType";
import { API } from "../apiService";

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

export function* requestUsers(action) {
  try {
    const response = yield API.getUsers();
    const users = response.data;
    yield put({ type: GET_USERS_SUCCESS, payload: users });
  } catch (error) {
    yield put({ type: GET_USERS_FAILED, payload: error });
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each ADD
export function* watchIncrementAsync() {
  yield takeEvery("ADD_REQUEST", incrementAsync);
  yield takeEvery(GET_USERS_REQUEST, requestUsers);
}

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
