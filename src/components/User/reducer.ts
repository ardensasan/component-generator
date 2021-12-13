const userReducer = (
  state = { userList: [], defaultDialogFields: {} },
  action: any
) => {
  switch (action.type) {
    case "GET_USER_LIST":
      return { ...state, userList: action.payload,defaultDialogFields: {} };
    default:
      return state;
  }
};

export default userReducer;
