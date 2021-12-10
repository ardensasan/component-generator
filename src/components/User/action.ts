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
