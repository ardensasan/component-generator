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
import fields from "../../tableFields";
import { toTitleCase } from "../../../../utils/string";
import { useDispatch } from "react-redux";
import { addUser } from "../../action";
import { hasEmptyField } from '../../../../utils/validation'
const New = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const [dialogFields, setDialogFields] = useState<any>({});
  const handleSave = () => {
    if(!hasEmptyField(fields,dialogFields)){
      dispatch(addUser(dialogFields))
      setOpen(false)
    } 
  };

  return (
    <Fragment>
      <Button variant="outlined" onClick={()=>setOpen(true)}>
        New
      </Button>
      <Dialog
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Add User</DialogTitle>
        <DialogContent>
          {fields.map(({ key }) => {
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
          <Button onClick={()=>setOpen(false)}>Cancel</Button>
          <Button onClick={handleSave} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default New;
