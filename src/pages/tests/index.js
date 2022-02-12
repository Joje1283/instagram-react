import React from "react";
import {Route} from "react-router-dom";
import TestLocalStorage from "./LocalStorage";

export default function Routes({ match }) {
  return (
    <>
      <Route exact path={match.url + "/localstorage"} component={TestLocalStorage} />
    </>
  )
}