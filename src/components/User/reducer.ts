const userReducer = (
  state = { userList: [], defaultFieldValues: {}, dialog: false },
  action: any
) => {
  switch (action.type) {
    case "GET_USER_LIST":
      return { ...state, userList: action.payload, defaultFieldValues: {}, dialog:false };
    case "GET_USER_DETAILS":
      console.log('%c 🍱 action: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', action);
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
