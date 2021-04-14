import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

import CardSingle from "../card/CardSingle";

import { useSelector, useDispatch } from "react-redux";

// import { updatePersons } from "../../redux/index";
import { fetchUsers, randomizeUsers } from "../../redux/index";

import "./CardList.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    textAlign: "centre",
    display: "block",
    "margin-left": "auto",
    "margin-right": "auto",
    width: "200px",
  },
}));

function UsersContainer() {


  const [cardStates,setCardStates]=useState([])

  const userData = useSelector((state) => state.persons);
  const dispatcher = useDispatch();
  // const [ iniState,setIniState]=useState({})

  const classes = useStyles();


  useEffect(()=>{
    setCardStates(userData.users)
    console.log(cardStates,"cardstates")
  })

 

  const clickRandomHandler = () => {
    dispatcher(randomizeUsers());
  };

  // const voteInitializer=(username)=>{
  //   iniState[username]=0
  // }

  return cardStates.loading ? (
    <h2>Loading</h2>
  ) : cardStates.error ? (
    <h2>{cardStates.error}</h2>
  ) : (
    <div>
      <div className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          onClick={clickRandomHandler}
        >
          Randomize
        </Button>
      </div>

      <div className="userList">
        {cardStates &&
          cardStates.map((person) => {
            return <CardSingle val={person} />;
          })}
      </div>
    </div>
  );
}

//redux to props
//selectors will be a separate file in most of the larger applications
// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     userData: state.persons,
//   };
// };

//we need to connect these two functions with our react components
//for that we use connect HOC from react redux library

export default UsersContainer;
