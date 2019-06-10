import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Signup from "./auth/signup";
import Login from "./auth/login";
import Notfound from "./notFound";
import Home from ".//home";
import { Provider } from "react-redux";
import store from "../redux/store/store";
class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route path="/api/superuser/auth/login" component={Login} />
              <Route exact path="/" component={Home} />
              <Route path="/api/superuser/auth/signup" component={Signup} />

              <Route component={Notfound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default Routes;
