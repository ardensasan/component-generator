export const getUserList = () => {
  return {
    type: "GET_USER_LIST_REQUESTED",
  };
};

export const addUser = (data: any) => {
  return {
    type: "ADD_USER_REQUESTED",
    data
  };
};


export const editUser = (data: any) => {
  return {
    type: "EDIT_USER_REQUESTED",
    data
  };
};
