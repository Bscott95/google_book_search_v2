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
}));

export default function SavedCard(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography>{props.book.title}</Typography>
          <Typography variant="body2" gutterBottom>
            written by {props.book.author}
          </Typography>
          <div>
            <img alt={props.book.title} src={props.book.image} />
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
                {props.book.description}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">
              <a href={props.book.link}>
                <Button color="primary">View</Button>
              </a>
              <Button
                onClick={() => props.deleteFn(props.book._id)}
                color="primary"
              >
                Delete
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
