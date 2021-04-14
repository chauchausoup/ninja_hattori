import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";

import store from "../../redux/store/store";

import DeleteOutlineTwoToneIcon from "@material-ui/icons/DeleteOutlineTwoTone";

import EditDialog from "./EditDialog";
import { fetchUsers, randomizeUsers } from "../../redux/index";
import {useSelector,useDispatch} from "react-redux";

const useStyles = makeStyles({
  table: {
    width: 400,
  },
});

function BasicTable() {

  const userData=useSelector((state)=>state.persons)

  const dispatcher = useDispatch()


  const [rowState, setRows] = useState([]);

  useEffect(() => {
    const rows = store.getState().persons.users;
    setRows(rows);
    rows.forEach((item) => console.log(item));

    console.log(rows, "this is user data state");
  }, []);

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>Votes</TableCell>
            <TableCell align="right">Keys</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowState.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell>
                <h3 style={{ color: "red" }}>{row.vote}</h3>
              </TableCell>
              <TableCell align="right">
                <KeyComponents item={row.username} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const KeyComponents = (props) => {
  useEffect(() => {
    setUser(props);

    console.log(props);
  }, []);

  const [user, setUser] = useState("");

  const deleteHandler = (e) => {
    alert(`are you sure you want to delete, ${user.item}`);

    console.log(store.getState().persons.users + " store ");
  };

  return (
    <div>
      <IconButton aria-label="delete">
        <DeleteOutlineTwoToneIcon onClick={() => deleteHandler()} />
      </IconButton>

      {/* edit button */}
      <EditDialog />
    </div>
  );
};



//we need to connect these two functions with our react components
//for that we use connect HOC from react redux library

export default BasicTable;
