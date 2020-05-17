import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Movietitles from "./components/movie_titles";
import MovieDetail from "./components/movie_detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/:page?" exact component={Movietitles} />
          <Route path="/movies/:movie" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
