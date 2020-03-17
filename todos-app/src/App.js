import React, { Component } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./component/navbar";

import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./component/home";
import Login from "./component/login";
import Logout from "./component/logout";
import NoFile from "./component/nofile";
import Registration from "./component/registration";
import ToDo from "./component/todo";

class App extends Component {
  state = {
    isLoggedin: false
  };
  setLogin = status => {
    this.setState({ isLoggedin: status }); //setting login value
  };
  render() {
    return (
      <div>
        <ToastContainer />
        <NavBar isLoggedin={this.state.isLoggedin} setLogin={this.setLogin} />

        <Switch>
          <Route
            path="/login"
            render={props => (
              <Login
                setLogin={this.setLogin}
                isLoggedin={this.state.isLoggedin}
                {...props}
              />
            )}
          />
          <Route path="/register" component={Registration} />
          <Route path="/logout" component={Logout} />

          {this.state.isLoggedin ? (
            <Route path="/todo" component={ToDo} />
          ) : (
            <Redirect to="/login" />
          )}

          <Route path="/" component={Home} />
          <Redirect from="/home" to="/" />
          <Route component={NoFile} />
        </Switch>
      </div>
    );
  }
}

export default App;
