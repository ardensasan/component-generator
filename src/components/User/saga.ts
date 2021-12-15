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
    return;
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

function* updateUser(data: any) {
  const config = {
    method: "put",
    url: `${apiRoot}user`,
    data
  };
  const { data: result } = yield call(request, config);
  if (result === "SUCCESS") {
    yield put({ type: "GET_USER_LIST_REQUESTED" });
    return;
  }
  yield put({ type: result });
}

function* getUserDetails(data:any){
  const config = {
    method: "get",
    url: `${apiRoot}user/${data.id}`,
    data
  };
  const { data: result } = yield call(request, config);
  if(result.type === "SUCCESS"){
    yield put({ type: "GET_USER_DETAILS",payload: result.result });
    return;
  }
  yield put({ type: result });
}

function* deleteUser(data:any){
  const config = {
    method: "delete",
    url: `${apiRoot}user/`,
    data
  };
  const { data: result } = yield call(request, config);
  if(result === "SUCCESS"){
    yield put({ type: "GET_USER_LIST_REQUESTED"});
    return;
  }
  yield put({ type: result });
}

function* watchDeleteUser(){
  yield takeLatest("DELETE_USER_REQUESTED",deleteUser)
}

function* watchGetUserDetails(){
  yield takeLatest("GET_USER_DETAILS_REQUESTED", getUserDetails);
}

function* watchUpdateUser() {
  yield takeLatest("UPDATE_USER_REQUESTED", updateUser);
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
  yield spawn(watchGetUserDetails)
  yield spawn(watchUpdateUser);
  yield spawn(watchDeleteUser)
}
