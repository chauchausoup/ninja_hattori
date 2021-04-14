import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

import CardSingle from "../card/CardSingle";

import { useSelector, useDispatch } from "react-redux";

import { randomizeUsers } from "../../redux/index";

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

  const classes = useStyles();


  useEffect(()=>{
    setCardStates(userData.users)
    console.log(cardStates,"cardstates")
  })

  const clickRandomHandler = () => {
    dispatcher(randomizeUsers());
  };

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

export default UsersContainer;
