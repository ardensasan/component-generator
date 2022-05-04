import { takeLatest, call, put, spawn } from "@redux-saga/core/effects";
import { apiRoot } from "../../common/api";
import request from "../../utils/request";
function* getCustomerList() {
  const config = {
    method: "get",
    url: `${apiRoot}customer`,
  };
  const { data } = yield call(request, config);
  if (data.type === "SUCCESS") {
    yield put({ type: "GET_CUSTOMER_LIST", payload: data.result });
    return;
  }
  yield put({ type: "ERROR" });
}

function* addCustomer(data: any) {
  const config = {
    method: "post",
    url: `${apiRoot}customer`,
    data,
  };
  const { data: result } = yield call(request, config);
  if (result.type === "ADD_CUSTOMER_REQUESTED") {
    yield put({ type: "GET_CUSTOMER_LIST_REQUESTED" });
    return;
  }
  yield put({ type: result });
}

function* updateCustomer(data: any) {
  const config = {
    method: "put",
    url: `${apiRoot}customer`,
    data
  };
  const { data: result } = yield call(request, config);
  if (result === "SUCCESS") {
    yield put({ type: "GET_CUSTOMER_LIST_REQUESTED" });
    return;
  }
  yield put({ type: result });
}

function* getCustomerDetails(data:any){
  const config = {
    method: "get",
    url: `${apiRoot}customer/${data.id}`,
    data
  };
  const { data: result } = yield call(request, config);
  if(result.type === "SUCCESS"){
    yield put({ type: "GET_CUSTOMER_DETAILS",payload: result.result });
    return;
  }
  yield put({ type: result });
}

function* deleteCustomer(data:any){
  const config = {
    method: "delete",
    url: `${apiRoot}customer/`,
    data
  };
  const { data: result } = yield call(request, config);
  if(result === "SUCCESS"){
    yield put({ type: "GET_CUSTOMER_LIST_REQUESTED"});
    return;
  }
  yield put({ type: result });
}

function* watchDeleteCustomer(){
  yield takeLatest("DELETE_CUSTOMER_REQUESTED",deleteCustomer)
}

function* watchGetCustomerDetails(){
  yield takeLatest("GET_CUSTOMER_DETAILS_REQUESTED", getCustomerDetails);
}

function* watchUpdateCustomer() {
  yield takeLatest("UPDATE_CUSTOMER_REQUESTED", updateCustomer);
}

function* watchGetCustomerList() {
  yield takeLatest("GET_CUSTOMER_LIST_REQUESTED", getCustomerList);
}

function* watchAddCustomer() {
  yield takeLatest("ADD_CUSTOMER_REQUESTED", addCustomer);
}
export default function* customerRootSaga() {
  yield spawn(watchGetCustomerList);
  yield spawn(watchAddCustomer);
  yield spawn(watchGetCustomerDetails)
  yield spawn(watchUpdateCustomer);
  yield spawn(watchDeleteCustomer)
}
