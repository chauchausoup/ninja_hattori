import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

import CardSingle from "../card/CardSingle";

import { connect } from "react-redux";

import { updatePersons } from "../../redux/index";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const axios = require("axios");

export default function CardList(props) {
  //button style
  const classes = useStyles();

  //our list of card is updated in this react state

  const [cardValues, setCardValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setCardValues(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className={classes.root}>
        <Button variant="contained" >Default</Button>
      </div>

      <ul>
        {cardValues.map((person, index) => {
          return (
            <li key={index}>
              <CardSingle val={person} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

//redux to props
//selectors will be a separate file in most of the larger applications
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

//defining map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    updatePersons: () => dispatch(updatePersons()),
  };
};

//we need to connect these two functions with our react components
//for that we use connect HOC from react redux library

// export default connect(mapStateToProps, mapDispatchToProps)(CardList);
