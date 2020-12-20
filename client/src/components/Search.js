import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ResultPage from "./ResultPage";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import API from "../utils/api";

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: "10px",
    backgroundColor: "#F4B400",
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "white",
    marginTop: 20
  },
}));

export default function SearchPage() {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    API.search(search).then((res) => {
      setResults(res.data.items);
    });
  };

  const handleSave = (id) => {
    const book = results[id];
    const {
      authors,
      title,
      description,
      imageLinks,
      infoLink,
    } = book.volumeInfo;

    const tempResults = results;
    tempResults.splice(id, 1);
    setResults([...tempResults]);

    API.addBook(
      authors,
      title,
      description,
      imageLinks.smallThumbnail,
      infoLink
    );
  };

  return (
    <Container>
      <Container className={classes.root}>
        <Typography variant="h5">
          Book Search
        </Typography>
        <br />
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Book"
            placeholder="Harry Potter"
            variant="outlined"
            className={classes.input}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Typography style={{ textAlign: "right" }}>
            <Button type="submit" className={classes.button}>
              Search
            </Button>
          </Typography>
        </form>
      </Container>
      <ResultPage data={results} saveFn={handleSave} />
    </Container>
  );
}
