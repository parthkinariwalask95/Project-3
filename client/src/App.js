import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
//used so browser back and front button works
import { BrowserRouter as Router, Route } from "react-router-dom";
import { setCurrentUser } from "./actions/authActions";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import "./App.css";

//check for token
if (localStorage.jwtToken) {
  //set auth token header off
  setAuthToken(localStorage.jwtToken);

  //decode the token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);

  //set user and is authenticated
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
