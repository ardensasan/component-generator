import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import FormDialog from "./FormDialog";
import Menu from "../../common/components/Menu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { toTitleCase } from "../../utils/string";
import fields from "./tableFields";
import { deleteCustomer, getCustomerDetails, getCustomerList, openDialog } from "./action";
const Customer = () => {
  const dispatch = useDispatch();
  const customerList = useSelector((state: any) => state.customer.customerList);
  const defaultFieldValues = useSelector(
    (state: any) => state.customer.defaultFieldValues
  );
  const dialog = useSelector((state: any) => state.customer.dialog);
  useEffect(() => {
    dispatch(getCustomerList());
  }, [dispatch]);
  return (
    <Menu>
      <Button variant="outlined" onClick={()=>dispatch(openDialog())}>New</Button>
      <FormDialog
        fields={fields}
        dialog={dialog}
        defaultFieldValues={defaultFieldValues}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {fields.map(({ key }) => {
                return <TableCell>{toTitleCase(key)}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            { customerList.map((customer: any) => {
              return (
                <Fragment>
                  <TableRow>
                    {fields.map(({ key }) => {
                      return <TableCell>{ customer[key]}</TableCell>;
                    })}
                    <TableCell>
                      <Button onClick={()=>dispatch(getCustomerDetails(customer._id))}>Edit</Button>
                      <Button onClick={()=>dispatch(deleteCustomer(customer._id))}>Delete</Button>
                    </TableCell>
                  </TableRow>
                </Fragment>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Menu>
  );
};

export default Customer;
