import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import FormDialog from "./FormDialog";
import Menu from "../../common/components/Menu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { toTitleCase } from "../../utils/string";
import fields from "./tableFields";
import { deleteEmployee, getEmployeeDetails, getEmployeeList, openDialog } from "./action";
const Employee = () => {
  const dispatch = useDispatch();
  const employeeList = useSelector((state: any) => state.employee.employeeList);
  const defaultFieldValues = useSelector(
    (state: any) => state.employee.defaultFieldValues
  );
  const dialog = useSelector((state: any) => state.employee.dialog);
  useEffect(() => {
    dispatch(getEmployeeList());
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
            { employeeList.map((employee: any) => {
              return (
                <Fragment>
                  <TableRow>
                    {fields.map(({ key }) => {
                      return <TableCell>{ employee[key]}</TableCell>;
                    })}
                    <TableCell>
                      <Button onClick={()=>dispatch(getEmployeeDetails(employee._id))}>Edit</Button>
                      <Button onClick={()=>dispatch(deleteEmployee(employee._id))}>Delete</Button>
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

export default Employee;
