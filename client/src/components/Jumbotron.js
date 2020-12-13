import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    borderRadius: "10px",
    backgroundColor: "#4285F4",
    marginTop: 20,
    padding: 20,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h3" style={{marginBottom:20}}>Google Books Search</Typography>
      <Typography variant="h6">Search for and Save Books of Interest!</Typography>
    </Container>
  );
}
