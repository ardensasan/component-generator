import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from 'react';
import { toTitleCase } from '../../utils/string';
import { getUserList } from './action'
import fields from './tableFields'
import New from './Dialog/New'
const User = () => {
  const dispatch = useDispatch();
  const userList = useSelector(
    (state: any) => state.user.userList
  );
   useEffect (()=> {
    dispatch(getUserList());
  },[dispatch])
  return (
    <Fragment>
      <New/>
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
                      return <TableCell>{ user[key] }</TableCell>;
                    })}
                  </TableRow>
                </Fragment>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  )
}

export default User