import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";
import SavedPage from "./components/SavedPage";

function App() {
  return (
    <div>
      <Router basename={""}>
        <Navbar />
        <Jumbotron />
        <Switch>
        <Route path="/search" component={Search} />
        <Route path="/saved" component={SavedPage} />
        <Route exact path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
