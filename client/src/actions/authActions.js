import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

//Register user
export const registeruser = (userData, history) => dispatch => {
  axios
    .post("api/users/register", userData)
    //If everything goes good data will be responded back
    //history.push will redirect
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Login user
//Get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      //Save to local storage
      //Destructuring
      const { token } = res.data;

      //set token to local storage
      localStorage.setItem("jwtToken", token);

      //Set token to auth header
      setAuthToken(token);

      //Decode token to get user data
      const decoded = jwt_decode(token);

      //Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

//Log user out
export const logoutUser = () => dispatch => {
  //Remove token from local storage
  localStorage.removeItem("jwt-token");

  //remove auth header for future requests
  setAuthToken(false);

  //Set current user to  {} which will also set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
