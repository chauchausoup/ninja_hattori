// this is the single component that shows the implementation of the card
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";

import { voteState } from "../../redux/index";
import { useSelector, useDispatch } from "react-redux";

// import store from "../../redux/store/store";

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

function ComplexGrid(props) {
  const userData = useSelector((state) => state.persons);

  const dispatcher = useDispatch();

  // // const [voteStateSingle, setVoteState] = useState(props.val.vote);
  // console.log(props)

  const [singleCardState, setSingleCardState] = useState({});

  const [flag, setFlag] = useState(null);

 
  useEffect(() => {
  
    setSingleCardState(props.val);
  });




  useEffect(()=>{
     flag && setSingleCardState(props.val);
  },[flag])

  const classes = useStyles();
  const randomGenerator = singleCardState.id + new Date();

  const voteHandle = (username) => {
    setFlag(1);
    console.log("there was a vote for", username);
    dispatcher(voteState(userData.users,username));
    // setFlag(1)
    //  setVoteState(prev=>prev+1)
    // console.log(voteStateSingle)

    // console.log(store.getState())
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
                  {singleCardState.name} {"  "}{" "}
                  <h2 style={{ color: "red" }}>{singleCardState.vote}</h2>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => voteHandle(singleCardState.username)}
                  >
                    Vote {singleCardState.username}
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

export default ComplexGrid;
