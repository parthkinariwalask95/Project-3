//Redux thing - look indepth
import { applyMiddleware, compose, createStore } from "redux";
// import { createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

//Create a var middleware
const middleware = [thunk];

//only chrome can handle rdux : checking the browser
if (window.navigator.userAgent.includes("Chrome")) {
  //Creating store - from redux
  // ... is a spread operator
  var store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  var store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
}

export default store;
