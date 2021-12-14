import { Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { toTitleCase } from "../../utils/string";
import { deleteUser, getUserDetails, getUserList, openDialog } from "./action";
import fields from "./tableFields";
import FormDialog from "./FormDialog";
import { Button } from "@mui/material";
const User = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state: any) => state.user.userList);
  const defaultFieldValues = useSelector(
    (state: any) => state.user.defaultFieldValues
  );
  const dialog = useSelector((state: any) => state.user.dialog);
  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);
  return (
    <Fragment>
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
            { userList.map((user: any) => {
              return (
                <Fragment>
                  <TableRow>
                    {fields.map(({ key }) => {
                      return <TableCell>{ user[key]}</TableCell>;
                    })}
                    <TableCell>
                      <Button onClick={()=>dispatch(getUserDetails(user._id))}>Edit</Button>
                      <Button onClick={()=>dispatch(deleteUser(user._id))}>Delete</Button>
                    </TableCell>
                  </TableRow>
                </Fragment>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default User;
