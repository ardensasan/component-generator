import { takeLatest, call, put, spawn } from "@redux-saga/core/effects";
import { apiRoot } from "../../common/api";
import request from "../../utils/request";

function* getUserList() {
  const config = {
    method: "get",
    url: `${apiRoot}user`,
  };
  const { data } = yield call(request, config);
  yield put({ type: "GET_USER_LIST", payload: data });
}

function* addUser(data: any) {
  const config = {
    method: "post",
    url: `${apiRoot}user`,
    data
  }
  const {data:result} = yield call(request,config)
  if(result === "ADD_USER_REQUESTED"){
    yield put({type: "GET_USER_LIST_REQUESTED"})
    return
  } 
  yield put({ type: result})
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
}
