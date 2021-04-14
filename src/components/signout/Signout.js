import React from "react";

import { useHistory } from "react-router";

import { useAuth } from "../authUtilities";

const getCredentialsInfo = JSON.parse(localStorage.getItem("credentialInfo"));

export default function Signout() {
  let history = useHistory();
  let auth = useAuth();
  console.log("whats inside auth",auth)


  
  return auth.user ? (
    <p>
      Welcome! {getCredentialsInfo.username} <br />
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}
