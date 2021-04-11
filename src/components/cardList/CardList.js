import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

import CardSingle from "../card/CardSingle";

import { connect } from "react-redux";

// import { updatePersons } from "../../redux/index";
import { fetchUsers,randomizeUsers } from "../../redux/index";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function UsersContainer({ userData, fetchUsers,randomizeUsers }) {
  const classes = useStyles();

  useEffect(() => {
    fetchUsers();
  }, []);

  const clickRandomHandler=()=>{
    console.log("raondomizer called")
    randomizeUsers()
  }

  

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <div className={classes.root}>
        <Button variant="contained" onClick={clickRandomHandler}>Randomize</Button>
      </div>

      <h2>Users List</h2>
      <div>
        {/* {JSON.stringify(userData)} */}

        {userData &&
          userData.users &&
          userData.users.map((person) => <CardSingle val={person} />)}
      </div>
    </div>
  );
}

//redux to props
//selectors will be a separate file in most of the larger applications
const mapStateToProps = (state) => {
  return {
    userData: state.persons,
  };
};

//defining map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    randomizeUsers: ()=>dispatch(randomizeUsers())
  };
};

//we need to connect these two functions with our react components
//for that we use connect HOC from react redux library

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
