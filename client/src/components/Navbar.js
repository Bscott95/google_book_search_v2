import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginBottom: 20,
  },
  color: {
    backgroundColor: "#DB4437"
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.color} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Google Books Search
          </Typography>
          <Button component={Link} to="/search" color="inherit">
            Search
          </Button>
          <Button to="/saved" component={Link} color="inherit">
            Saved
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
