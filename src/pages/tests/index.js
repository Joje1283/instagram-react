import React from "react";
import {Route} from "react-router-dom";
import TestLocalStorage from "./LocalStorage";
import TestAxios from "./GlobalAxios";
import TestGlobalAxiosHooks from "./GlobalAxiosHook";

export default function Routes({ match }) {
  return (
    <>
      <Route exact path={match.url + "/localstorage"} component={TestLocalStorage} />
      <Route exact path={match.url + '/globalaxios'} component={TestAxios} />
      <Route exact path={match.url + '/globalaxioshooks'} component={TestGlobalAxiosHooks} />
    </>
  )
}