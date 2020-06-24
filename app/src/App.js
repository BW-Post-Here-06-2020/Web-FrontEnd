import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import ButtonAppBar from "./components/NavBar/ButtonAppBar";

function App() {
  return (
    <div>
      <ButtonAppBar />
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
