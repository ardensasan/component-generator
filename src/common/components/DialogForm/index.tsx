import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  OutlinedInput,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { toTitleCase } from "../../../utils/string";
import { useDispatch } from "react-redux";
import { Field, NewDialog } from "./types";
import { addUser, closeDialog, updateUser } from "../../../components/User/action";
const New = ({ fields, defaultFieldValues, dialog }: NewDialog) => {
  const dispatch = useDispatch();
  const [fieldValues, setFieldValues] = useState(defaultFieldValues);

  const handleSave = () => {
    if(fieldValues.hasOwnProperty("_id")) return dispatch(updateUser(fieldValues))
    dispatch(addUser(fieldValues));
  };

  useEffect(() => {
    setFieldValues(defaultFieldValues);
  }, [defaultFieldValues]);
  return (
    <Fragment>
      <Dialog
        open={dialog}
        onClose={() => dispatch(closeDialog())}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Add User</DialogTitle>
        <DialogContent>
          {fields.map(({ key }: Field) => {
            return (
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                  value={fieldValues[key]}
                  placeholder={toTitleCase(key)}
                  onChange={(event: any) => {
                    setFieldValues({
                      ...fieldValues,
                      ...{ [key]: event.target.value },
                    });
                  }}
                />
              </FormControl>
            );
          })}
          <DialogContentText id="alert-dialog-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(closeDialog())}>Cancel</Button>
          <Button onClick={handleSave} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default New;