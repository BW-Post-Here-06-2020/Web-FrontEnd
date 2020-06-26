import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import ButtonAppBar from "./components/NavBar/ButtonAppBar";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

function App() {
  const token = useSelector((state) => state.userReducer.token);

  console.log("App -> token", token);

  return (
    <Container>
      <ButtonAppBar />
      <Switch>
        {token ? (
          <div>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/profile" component={Profile} />
          </div>
        ) : (
          <Route exact path="/" component={Login} />
        )}
      </Switch>
    </Container>
  );
}

export default App;
