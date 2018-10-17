import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import signUp from "./pages/signup";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={signUp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
