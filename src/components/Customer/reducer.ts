const customerReducer = (
  state = { customerList: [], defaultFieldValues: {}, dialog: false },
  action: any
) => {
  switch (action.type) {
    case "GET_CUSTOMER_LIST":
      return { ...state, customerList: action.payload, defaultFieldValues: {}, dialog:false };
    case "GET_CUSTOMER_DETAILS":
      return { ...state, defaultFieldValues: action.payload, dialog: true };
      
    case "OPEN_DIALOG":
      return { ...state, defaultFieldValues: {}, dialog: true };
    case "CLOSE_DIALOG":
      return { ...state, dialog: false, defaultFieldValues: {} };
    default:
      return state;
  }
};

export default customerReducer;
