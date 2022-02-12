import React from "react";
import {Route} from "react-router-dom";
import TestLocalStorage from "./LocalStorage";
import TestAxios from "./GlobalAxios";

export default function Routes({ match }) {
  return (
    <>
      <Route exact path={match.url + "/localstorage"} component={TestLocalStorage} />
      <Route exact path={match.url + '/globalaxios'} component={TestAxios} />
    </>
  )
}