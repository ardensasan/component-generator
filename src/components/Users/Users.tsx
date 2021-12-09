import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { getUsersList } from "./actions";
// import New from "./Dialog/New";
import fields from "./tableFields";
import { toTitleCase } from "../../utils/string";
const Users = () => {
  const dispatch = useDispatch();
  const usersList = useSelector((state: any) => state.users.usersList);
  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch]);
//TODO handlebar condition dont integrate api
//TODO 
  return (
    <Fragment>
      {/* <New /> */}
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
              return (
                <Fragment>
                  <TableRow>
                    {fields.map(({ key }) => {
                      return <TableCell>{user[key]}</TableCell>;
                    })}
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

export default Users;
