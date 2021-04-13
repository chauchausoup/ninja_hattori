import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

import CardSingle from "../card/CardSingle";

import { connect } from "react-redux";

// import { updatePersons } from "../../redux/index";
import { fetchUsers, randomizeUsers } from "../../redux/index";

import "./CardList.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    textAlign: "centre",
  },
}));

function UsersContainer({ userData, fetchUsers, randomizeUsers }) {
  // const [ iniState,setIniState]=useState({})

  const classes = useStyles();

  useEffect(() => {
    fetchUsers();
  }, []);

  const clickRandomHandler = () => {
    console.log("randomizer called");
    randomizeUsers();
  };

  // const voteInitializer=(username)=>{
  //   iniState[username]=0
  // }

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <div className={classes.root}>
        <Button variant="contained" onClick={clickRandomHandler}>
          Randomize
        </Button>
      </div>

      <div className="userList">
        {userData &&
          userData.users &&
          userData.users.map((person) => {
            // voteInitializer(person.username)
            return <CardSingle val={person} /* sta={iniState}  */ />;
          })}
      </div>
    </div>
  );
}

//redux to props
//selectors will be a separate file in most of the larger applications
const mapStateToProps = (state) => {
  console.log(state);
  return {
    userData: state.persons,
  };
};

//defining map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    randomizeUsers: () => dispatch(randomizeUsers())
  };
};

//we need to connect these two functions with our react components
//for that we use connect HOC from react redux library

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
