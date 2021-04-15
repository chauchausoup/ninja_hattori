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

function CardList() {

  const [cardStates, setCardStates] = useState([]);

  //redux
  const userData = useSelector((state) => state.persons);
  const dispatcher = useDispatch();

  const classes = useStyles();

  //useEffects
  useEffect(() => {
    setCardStates(userData.users);
  }, [userData.users]);

  const clickRandomHandler = () => {
    dispatcher(randomizeUsers());
  };

  return cardStates.loading ? (
    <p>Loading</p>
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
            return <CardSingle val={person} key={person.id} />;
          })}
      </div>
    </div>
  );
}

export default CardList;
