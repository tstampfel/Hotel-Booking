import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import About from "../About";
import Home from "../Home";
import NavbarComponent from "../navbar/navbar-component";
import Rooms from "../Rooms";
import GuardedRoute from "./guarded-route";
import { AnimatePresence } from "framer-motion";
import { Footer } from "../footer/footer";

function Routes(props: any) {
  const location = useLocation();
  return (
    <div>
      <NavbarComponent />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <GuardedRoute path="/rooms" component={Rooms} exact />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default Routes;
