import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SavedCard from "./SavedCard";
import Typography from "@material-ui/core/Typography";
import API from "../utils/api";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "10px",
    backgroundColor: "#0F9D58",
    padding: 20,
  },
  top: {
    marginTop: 20,
  },
}));

export default function SearchPage() {
  const classes = useStyles();

  const [savedBooks, setSavedBooks] = useState([]);
  const [deletedBookId, setDeletedBookId] = useState("");

  useEffect(() => {
    API.getAllBooks().then((res) => setSavedBooks(res.data));
  }, [deletedBookId]);

  const deleteFn = (id) => {
    API.deleteBook(id).then((res) => setDeletedBookId(res.data._id));
  };

  return savedBooks ? (
    <Container className={classes.top}>
      <Container className={classes.root}>
        <Typography variant="h5" gutterBottom>
          Saved Books
        </Typography>
        {savedBooks.map((book, index) => (
          <SavedCard key={index} book={book} deleteFn={deleteFn} />
        ))}
      </Container>
    </Container>
  ) : (
    <div>Loading...</div>
  );
}
