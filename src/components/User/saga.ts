import { takeLatest, call, put, spawn } from "@redux-saga/core/effects";
import { apiRoot } from "../../common/api";
import request from "../../utils/request";

function* getUserList() {
  const config = {
    method: "get",
    url: `${apiRoot}user`,
  };
  const { data } = yield call(request, config);
  if (data.type === "SUCCESS") {
    yield put({ type: "GET_USER_LIST", payload: data.result });
  }
  yield put({ type: "ERROR" });
}

function* addUser(data: any) {
  const config = {
    method: "post",
    url: `${apiRoot}user`,
    data,
  };
  const { data: result } = yield call(request, config);
  if (result.type === "ADD_USER_REQUESTED") {
    yield put({ type: "GET_USER_LIST_REQUESTED" });
    return;
  }
  yield put({ type: result });
}

function* editUser(data: any) {
  const config = {
    method: "put",
    url: `${apiRoot}user`,
    data,
  };
  const { data: result } = yield call(request, config);
  if (result === "EDIT_USER_REQUESTED") {
    yield put({ type: "GET_USER_LIST_REQUESTED" });
    return;
  }
  yield put({ type: result });
}

function* watchEditUser() {
  yield takeLatest("EDIT_USER_REQUESTED", editUser);
}

function* watchGetUserList() {
  yield takeLatest("GET_USER_LIST_REQUESTED", getUserList);
}

function* watchAddUser() {
  yield takeLatest("ADD_USER_REQUESTED", addUser);
}
export default function* userRootSaga() {
  yield spawn(watchGetUserList);
  yield spawn(watchAddUser);
  yield spawn(watchEditUser);
}
