import { takeLatest, call, put, spawn } from "redux-saga/effects";
import {apiRoot} from "../../common/api";
import { getList } from "../../utils/request";
function* getUsersList(): any {
  const config = {
    method: "get",
    url: `${apiRoot}user`,
  };
  const {data} = yield call(getList,config);
  yield put({ type: "GET_USERS_LIST", payload: data });
}

function* watchUsersRequested() {
  yield takeLatest("GET_USERS_LIST_REQUESTED", getUsersList);
}

export default function* usersRootSaga() {
  yield spawn(watchUsersRequested);
}
