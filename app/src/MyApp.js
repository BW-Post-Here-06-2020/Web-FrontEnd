import React, { useEffect } from 'react';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./MyApp.css";
import NavigationBar from "./components/myComponents/NavigationBar";
import LoginForm from "./components/myComponents/LoginForm";
import PrivateRoute from "./components/myComponents/PrivateRoute";
import CreateAccountForm from "./components/myComponents/CreateAccountForm";
import Dashboard from "./components/myComponents/Dashboard";

export default () => 
{
  useEffect( () => { M.AutoInit() }, [] );
  return (
    <BrowserRouter> 
      <NavigationBar />

      
      <Switch>
        <Route exact path = "/" component = { LoginForm } />
        <Route path = "/createAccount" component = { CreateAccountForm } />
        <PrivateRoute path = "/dashboard" component = { Dashboard } />
        <div>404</div>
      </Switch>
    </BrowserRouter>
  );
}