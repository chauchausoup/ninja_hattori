import React,{useState,useEffect} from "react";

//MUI
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";

import BorderColorIcon from "@material-ui/icons/BorderColor";


import {editingUsername } from "../../redux/index";
import { useDispatch,useSelector } from "react-redux";

export default function FormDialog(props) {

  const dispatcher = useDispatch()
  const userData = useSelector((state) => state.persons);
  

  const [open, setOpen] = React.useState(false);
  const [editedUsername,setEUsername]=useState('')
  const [parentUser,setParentUser]=useState('')

  useEffect(()=>{
    setParentUser(props.username)
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatcher(editingUsername(userData,parentUser,editedUsername))
  };

  const handleEditChange=(e)=>{
    e.preventDefault()
    setEUsername(e.target.value)
  }

  return (
    <div>
      <IconButton aria-label="edit" onClick={handleClickOpen}>
        <BorderColorIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit username here:</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Enter a username
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            onChange={handleEditChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
