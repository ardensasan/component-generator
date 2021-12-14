const userReducer = (
  state = { userList: [], defaultFieldValues: {}, dialog: false },
  action: any
) => {
  switch (action.type) {
    case "GET_USER_LIST":
      return { ...state, userList: action.payload, defaultFieldValues: {}, dialog:false };
    case "GET_USER_DETAILS":
      return { ...state, defaultFieldValues: action.payload, dialog: true };
      
    case "OPEN_DIALOG":
      return { ...state, defaultFieldValues: {}, dialog: true };
    case "CLOSE_DIALOG":
      return { ...state, dialog: false, defaultFieldValues: {} };
    default:
      return state;
  }
};

export default userReducer;
