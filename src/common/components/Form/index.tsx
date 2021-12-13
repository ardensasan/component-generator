import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Fragment, useState } from "react";
import { toTitleCase } from "../../../utils/string";
import { useDispatch } from "react-redux";
import { hasEmptyField } from "../../../utils/validation";
import { Field, FormTypes } from "./types";
const Form = (props: FormTypes) => {
  const { addItem, editItem, fields, type, defaultDialogFields } = props;
  const [dialogFields,setDialogFields] = useState(defaultDialogFields) 
  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const handleSave = () => {
    if (!hasEmptyField(fields, dialogFields)) {
      if(addItem){
        dispatch(addItem(dialogFields));
      }
      if(editItem){
        
      }
      setOpen(false);
    }
  };

  return (
    <Fragment>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        {type}
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Add User</DialogTitle>
        <DialogContent>
          {fields.map(({ key }: Field) => {
            return (
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  {toTitleCase(key)}
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                  value={dialogFields[key]}
                  onChange={(event: any) => {
                    setDialogFields({
                      ...dialogFields,
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
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSave} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default Form;
