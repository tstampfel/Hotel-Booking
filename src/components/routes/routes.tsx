import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import NavbarComponent from "../navbar/navbar-component";
import GuardedRoute from "./guarded-route";
import { AnimatePresence } from "framer-motion";
import { Footer } from "../footer/footer";
import { Booking } from "../booking/booking";
import About from "../About";
import Rooms from "../Rooms";
import Home from "../Home";

function Routes(props: any) {
  const location = useLocation();
  return (
    <div>
      <NavbarComponent />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/booking" component={Booking} exact />
          <GuardedRoute path="/rooms" component={Rooms} exact />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default Routes;
