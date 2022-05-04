export const getCustomerList = () => {
  return {
    type: "GET_CUSTOMER_LIST_REQUESTED",
  };
};

export const addCustomer = (data: any) => {
  return {
    type: "ADD_CUSTOMER_REQUESTED",
    data,
  };
};

export const updateCustomer = (data: any) => {
  return {
    type: "UPDATE_CUSTOMER_REQUESTED",
    data,
  };
};

export const getCustomerDetails = (id: string) => {
  return {
    type: "GET_CUSTOMER_DETAILS_REQUESTED",
    id,
  };
};

export const deleteCustomer = (id: string) => {
  return {
    type: "DELETE_CUSTOMER_REQUESTED",
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