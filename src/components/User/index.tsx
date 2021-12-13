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
import { addUser, getUserList } from "./action";
import fields from "./tableFields";
import Form from "../../common/components/Form";
import { Button } from "@mui/material";
//TODO ADD EDIT
const User = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state: any) => state.user.userList);
  const defaultDialogFields = useSelector(
    (state: any) => state.user.defaultDialogFields
  );
  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);
  return (
    <Fragment>
      <Form
        addItem={addUser}
        fields={fields}
        type={"New"}
        defaultDialogFields={defaultDialogFields}
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
                      <Form
                        addItem={addUser}
                        defaultDialogFields={defaultDialogFields}
                        fields={fields}
                        type={"Edit"}
                      />
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
