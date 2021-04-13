// this is the single component that shows the implementation of the card

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";


import {voteState} from '../../redux/index'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "20px",
    maxWidth: 300,
    minHeight: 200,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const roboHashURL = "https://robohash.org/";

export default function ComplexGrid(props) {
  // const [voteStateSingle, setVoteState] = useState(props.val.vote);

  const classes = useStyles();
  const randomGenerator = props.val.id + new Date();

  const voteHandle = (username) => {
    console.log("there was a vote for", username);
    //  setVoteState(prev=>prev+1)
    // console.log(voteStateSingle)
    voteState(username)
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src={roboHashURL + randomGenerator}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.val.name} {"  "} <h2 style={{color:"red"}}>{props.val.vote}</h2>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => voteHandle(props.val.username)}
                  >
                    Vote {props.val.username}
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
