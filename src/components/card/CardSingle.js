/* this is the single component that shows the implementation of the card
 */

import React, { useState, useEffect } from "react";

//material ui
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";

//redux
import { voteState } from "../../redux/index";
import { useSelector, useDispatch } from "react-redux";

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

function CardSingle(props) {
  //redux
  const userData = useSelector((state) => state.persons);
  const dispatcher = useDispatch();

  const [singleCardState, setSingleCardState] = useState({});
  const [flag, setFlag] = useState(null);

  //useEffects
  useEffect(() => {
    setSingleCardState(props.val);
  }, [props.val]);

  useEffect(() => {
    flag && setSingleCardState(props.val);
  }, [flag, props.val]);

  const classes = useStyles();

  const randomGenerator = Math.random() + new Date();

  const voteHandle = (username) => {
    setFlag(1);
    dispatcher(voteState(userData.users, username));
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
                  <p style={{ color: "red" }}>{singleCardState.vote}</p>
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

export default CardSingle;
