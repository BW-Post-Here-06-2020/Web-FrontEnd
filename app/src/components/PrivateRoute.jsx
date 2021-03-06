import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = useSelector((state) => state.userReducer.token);
  return (
    <Route
      {...rest}
      render={(props) => {
        return token ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;
