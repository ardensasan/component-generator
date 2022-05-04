const employeeReducer = (
  state = { employeeList: [], defaultFieldValues: {}, dialog: false },
  action: any
) => {
  switch (action.type) {
    case "GET_EMPLOYEE_LIST":
      return { ...state, employeeList: action.payload, defaultFieldValues: {}, dialog:false };
    case "GET_EMPLOYEE_DETAILS":
      return { ...state, defaultFieldValues: action.payload, dialog: true };
      
    case "OPEN_DIALOG":
      return { ...state, defaultFieldValues: {}, dialog: true };
    case "CLOSE_DIALOG":
      return { ...state, dialog: false, defaultFieldValues: {} };
    default:
      return state;
  }
};

export default employeeReducer;
