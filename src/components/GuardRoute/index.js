import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const GuardRoute = ({ children, ...rest }) => {
  let { token } = useSelector((state) => state.auth);

  return <Route {...rest}>{token ? children : <Redirect to="/v1" />}</Route>;
};

export default GuardRoute;
