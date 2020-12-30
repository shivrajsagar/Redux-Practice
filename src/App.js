import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import Weather from "./pages/Weather";
import UserDetail from "./pages/UserDetail";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/posts" component={Posts} />
        <Route path="/users" component={Users} />
        <Route path="/userdetail/:id" component={UserDetail} />
        <Route path="/weather" component={Weather} />
      </Switch>
    );
  }
}

export default App;
