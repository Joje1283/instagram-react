import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import {useAppContext} from "./store";

// 인증되지 않았을 때, 로그인 페이지로 리디렉션 하기위한 컴포넌트
export default function LoginRequiredRoute({component: Component, ...kwargs}) {
  const {store: {isAuthenticated}} = useAppContext();
  console.log("isAuthenticated: ", isAuthenticated)
  return (
    <Route
      {...kwargs}
      render={props => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/accounts/login",
                state: {from: props.location}
              }}
            />
          )
        }
      }}
    />
  )
}