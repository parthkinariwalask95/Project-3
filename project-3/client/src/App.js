import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { admin, signUp } from "./pages/admin";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={signUp.js} />
            <Route exact path="/admin" component={admin.js} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
