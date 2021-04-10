// this is the single component that shows the implementation of the card

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 300,
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
  const classes = useStyles();
  const randomGenerator = props.val.id + new Date();

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
                  {props.val.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.val.username}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {props.val.email}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  <div>
                    <h4>Address: </h4>
                    <ul>
                      <li>{props.val.address.street}</li>
                      <li>{props.val.address.suite}</li>
                      <li>{props.val.address.city}</li>
                      <li>{props.val.address.zipcode}</li>
                    </ul>
                  </div>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
