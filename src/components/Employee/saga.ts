import { takeLatest, call, put, spawn } from "@redux-saga/core/effects";
import { apiRoot } from "../../common/api";
import request from "../../utils/request";
function* getEmployeeList() {
  const config = {
    method: "get",
    url: `${apiRoot}employee`,
  };
  const { data } = yield call(request, config);
  if (data.type === "SUCCESS") {
    yield put({ type: "GET_EMPLOYEE_LIST", payload: data.result });
    return;
  }
  yield put({ type: "ERROR" });
}

function* addEmployee(data: any) {
  const config = {
    method: "post",
    url: `${apiRoot}employee`,
    data,
  };
  const { data: result } = yield call(request, config);
  if (result.type === "ADD_EMPLOYEE_REQUESTED") {
    yield put({ type: "GET_EMPLOYEE_LIST_REQUESTED" });
    return;
  }
  yield put({ type: result });
}

function* updateEmployee(data: any) {
  const config = {
    method: "put",
    url: `${apiRoot}employee`,
    data
  };
  const { data: result } = yield call(request, config);
  if (result === "SUCCESS") {
    yield put({ type: "GET_EMPLOYEE_LIST_REQUESTED" });
    return;
  }
  yield put({ type: result });
}

function* getEmployeeDetails(data:any){
  const config = {
    method: "get",
    url: `${apiRoot}employee/${data.id}`,
    data
  };
  const { data: result } = yield call(request, config);
  if(result.type === "SUCCESS"){
    yield put({ type: "GET_EMPLOYEE_DETAILS",payload: result.result });
    return;
  }
  yield put({ type: result });
}

function* deleteEmployee(data:any){
  const config = {
    method: "delete",
    url: `${apiRoot}employee/`,
    data
  };
  const { data: result } = yield call(request, config);
  if(result === "SUCCESS"){
    yield put({ type: "GET_EMPLOYEE_LIST_REQUESTED"});
    return;
  }
  yield put({ type: result });
}

function* watchDeleteEmployee(){
  yield takeLatest("DELETE_EMPLOYEE_REQUESTED",deleteEmployee)
}

function* watchGetEmployeeDetails(){
  yield takeLatest("GET_EMPLOYEE_DETAILS_REQUESTED", getEmployeeDetails);
}

function* watchUpdateEmployee() {
  yield takeLatest("UPDATE_EMPLOYEE_REQUESTED", updateEmployee);
}

function* watchGetEmployeeList() {
  yield takeLatest("GET_EMPLOYEE_LIST_REQUESTED", getEmployeeList);
}

function* watchAddEmployee() {
  yield takeLatest("ADD_EMPLOYEE_REQUESTED", addEmployee);
}
export default function* employeeRootSaga() {
  yield spawn(watchGetEmployeeList);
  yield spawn(watchAddEmployee);
  yield spawn(watchGetEmployeeDetails)
  yield spawn(watchUpdateEmployee);
  yield spawn(watchDeleteEmployee)
}
