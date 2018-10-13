// import React, { Component } from "react";
// import View from "./components/Main";

// class App extends Component {


//   render() {
//     return (
//       <div>
//         <View />
        
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Saved from "./pages/Saved";
import Matches from "./pages/Matches";

const App = () => (
  <Router>
  <div>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/matches" component={Matches} />
      <Route exact path="/saved" component={Saved} />
      <Route exact path="/profile" component={Profile} />

    </Switch>
  </div>
</Router>
);

export default App;
