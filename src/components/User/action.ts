export const getUserList = () => {
  return {
    type: "GET_USER_LIST_REQUESTED",
  };
};

export const addUser = (data: any) => {
  return {
    type: "ADD_USER_REQUESTED",
    data,
  };
};

export const updateUser = (data: any) => {
  return {
    type: "UPDATE_USER_REQUESTED",
    data,
  };
};

export const getUserDetails = (id: string) => {
  return {
    type: "GET_USER_DETAILS_REQUESTED",
    id,
  };
};

export const deleteUser = (id: string) => {
  return {
    type: "DELETE_USER_REQUESTED",
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