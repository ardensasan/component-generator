export const getEmployeeList = () => {
  return {
    type: "GET_EMPLOYEE_LIST_REQUESTED",
  };
};

export const addEmployee = (data: any) => {
  return {
    type: "ADD_EMPLOYEE_REQUESTED",
    data,
  };
};

export const updateEmployee = (data: any) => {
  return {
    type: "UPDATE_EMPLOYEE_REQUESTED",
    data,
  };
};

export const getEmployeeDetails = (id: string) => {
  return {
    type: "GET_EMPLOYEE_DETAILS_REQUESTED",
    id,
  };
};

export const deleteEmployee = (id: string) => {
  return {
    type: "DELETE_EMPLOYEE_REQUESTED",
    id,
  };
};
export const openDialog = () => {
  return {
    type: "OPEN_DIALOG",
  };
};

export const closeDialog = () => {
  return {
    type: "CLOSE_DIALOG",
  };
};