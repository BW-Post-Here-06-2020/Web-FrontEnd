import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
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
          <>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/profile" component={Profile} />
          </>
        ) : (
          <Route exact path="/" component={Login} />
        )}
      </Switch>
    </div>
  );
}

export default App;
