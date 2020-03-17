import React from "react";
import Books from "./components/books";
import NavBar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import NoFile from "./components/nofile";
import BookDetails from "./components/booksdetails";
import Logout from "./components/logout";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/books" exact component={Books} />
        <Route path="/books/:id?" component={BookDetails} />
        <Route path="/login" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/" exact component={Home} />
        <Redirect from="/home" to="/" />
        <Route component={NoFile} />
      </Switch>
    </div>
  );
}

export default App;
