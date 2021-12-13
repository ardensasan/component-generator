import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { toTitleCase } from "../../utils/string";
import { getUserDetails, getUserList, openDialog } from "./action";
import fields from "./tableFields";
import DialogForm from "../../common/components/DialogForm";
import { Button } from "@mui/material";
//TODO ADD EDIT
const User = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state: any) => state.user.userList);
  const defaultFieldValues = useSelector(
    (state: any) => state.user.defaultFieldValues
  );
  const dialog = useSelector((state: any) => state.user.dialog);
  const handleNew = () =>{
    dispatch(openDialog())
  }

  const handleEdit = (id:string) =>{
    dispatch(getUserDetails(id))
  }
  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);
  return (
    <Fragment>
      <Button variant="outlined" onClick={handleNew}>New</Button>
      <DialogForm
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
            {userList.map((user: any) => {
              return (
                <Fragment>
                  <TableRow>
                    {fields.map(({ key }) => {
                      return <TableCell>{user[key]}</TableCell>;
                    })}
                    <TableCell>
                      <Button onClick={()=>handleEdit(user._id)}>Edit</Button>
                      <Button>Delete</Button>
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
