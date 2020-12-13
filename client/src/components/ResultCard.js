import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  paper: {
    padding: 20,
    backgroundColor: "white",
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: 125,
    height: 125,
  },
}));

export default function ResultCard(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography>{props.title}</Typography>
          <Typography variant="body2" gutterBottom>
            Author: {props.author}
          </Typography>
          <div>
            <img alt={props.title} src={props.image} />
          </div>
        </Grid>
        <Grid item sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                style={{ marginTop: "40px" }}
                variant="body2"
                color="textSecondary"
              >
                {props.description}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography>
              <a href={props.link}>
                <Button color="primary">View</Button>
              </a>
              <Button onClick={() => props.saveFn(props.id)} color="primary">
                Save
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
