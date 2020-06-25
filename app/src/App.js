import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import ButtonAppBar from "./components/NavBar/ButtonAppBar";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.userReducer.token);

  console.log("App -> token", token);

  return (
    <div>
      <ButtonAppBar />
      <Switch>
        {token ? (
          <PrivateRoute exact path="/" component={Dashboard} />
        ) : (
          <Route exact path="/" component={Login} />
          // <Route exact path="/" component={Home} />
        )}
        {/* <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Home} /> */}
      </Switch>
    </div>
  );
}

export default App;
