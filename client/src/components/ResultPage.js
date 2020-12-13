import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ResultCard from "./ResultCard";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: "10px",
    backgroundColor: "#0F9D58",
    padding: 20,
  },
}));

export default function ResultPage(props) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h5">
        Results
      </Typography>
      {props.data.map((book, index) => (
        <ResultCard
          key={index}
          id={index}
          author={book.volumeInfo.authors}
          title={book.volumeInfo.title}
          description={book.volumeInfo.description}
          image={book.volumeInfo.imageLinks.smallThumbnail}
          link={book.volumeInfo.infoLink}
          saveFn={props.saveFn}
        />
      ))}
    </Container>
  );
}
