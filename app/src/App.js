import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import ButtonAppBar from "./components/NavBar/ButtonAppBar";

function App() {
  return (
    <Router>
      <div>
        <ButtonAppBar />
        <Switch>
          <PrivateRoute exact path="/dashboard" compontent={Dashboard} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
