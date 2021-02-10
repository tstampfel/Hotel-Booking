import React from "react";
import { Route, Redirect } from "react-router-dom";

type IGuardedRouteProps = {
  component: React.FC;
  path: string;
  exact: boolean;
};

const GuardedRoute: React.FC<IGuardedRouteProps> = (props) => {
  const condition = true;

  return condition ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/" />
  );
};
export default GuardedRoute;
