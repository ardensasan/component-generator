import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { getUsersList } from "./actions";
import New from "./Dialog/New";
import fields from "./tableFields";
import { toTitleCase } from "../../utils/string";
const Users = () => {
  const dispatch = useDispatch();
  const usersList = useSelector((state: any) => state.users.usersList);
  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch]);

  return (
    <Fragment>
      <New />
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
            {usersList.map((user: any) => {
              return <Fragment>
                <TableRow>
                {fields.map(({ key }) => {
                  return <TableCell>{user[key]}</TableCell>;
                })}
                </TableRow>
              </Fragment>
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default Users;
