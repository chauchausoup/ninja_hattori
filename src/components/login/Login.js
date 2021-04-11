import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Login() {
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

  const handleLoginSuccess = () => {
    console.log("login success");
    //clear text box values
    //got to /user-list page
    




  };

  const handleLoginFailure = () => {
    console.log("login failure");
  };

  const loginHandle = () => {
    // console.log("login")
    // console.log(postAPIvalue().password,postAPIvalue().username);

    const getCredentialsInfo = cookies.get("credentialInfo");

    // console.log(getCredentialsInfo)

    getCredentialsInfo &&
    getCredentialsInfo.username === username &&
    getCredentialsInfo.password === password
      ? handleLoginSuccess()
      : handleLoginFailure();
  };

  // const postAPIvalue = () => {
  //   return {
  //     username: username,
  //     password: password,
  //   };
  // };

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="username"
        variant="outlined"
        onChange={usernameSet}
      />
      <br />

      <TextField
        id="outlined-basic"
        label="password"
        variant="outlined"
        onChange={passwordSet}
        type="password"
      />
      <br />

      <Button variant="contained" onClick={loginHandle}>
        Login
      </Button>
    </form>
  );
}
