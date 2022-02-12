import React from "react";
import {Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import AccountsRoutes from "./accounts"
import TestComponent from "./tests";


export default function Root() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="/accounts" component={AccountsRoutes} />
      <Route path="/tests" component={TestComponent} />
    </>
  )
}