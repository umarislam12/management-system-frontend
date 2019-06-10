import { takeLatest, put } from "redux-saga/effects";
import * as types from "../types/types";
import Api from "../../lib/api";

export function* loginRequest() {
  yield takeLatest(types.LOGIIN_API, doApiCall);
}
function* doApiCall(params) {
  try {
    const response = yield Api.post("/api/superuser/auth/login", params.params);
    console.log("reponse is", response);
    yield put({ type: types.LOGIIN_API_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error.status);

    yield put({ type: types.LOGIIN_API_FAILURE, status: error.status });
  }
}
