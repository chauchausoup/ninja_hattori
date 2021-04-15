import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function SignUp() {
  let history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameSet = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const passwordSet = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const signupHandle = () => {
    localStorage.setItem("credentialInfo", postAPIvalue());
    history.push("/login");
  };

  const postAPIvalue = () => {
    return JSON.stringify({
      username: username,
      password: password,
    });
  };

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic-username"
        label="username"
        variant="outlined"
        onChange={usernameSet}
      />
      <br />

      <TextField
        id="outlined-basic-password"
        label="password"
        variant="outlined"
        onChange={passwordSet}
        type="password"
      />
      <br />

      <Button variant="contained" onClick={signupHandle}>
        SignUp
      </Button>
    </form>
  );
}
