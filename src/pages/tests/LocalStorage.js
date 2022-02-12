import React from "react";
import {Button} from "antd"
import {setToken, deleteToken, useAppContext} from "../../core/store";

// src/core/store.js가 잘 동작하는지 확인하기 위한 테스트 컴포넌트

function TestLocalStorage() {
  const {dispatch} = useAppContext();

  const setTokenClicked = () => {
    dispatch(setToken("abcde"))
  }

  const deleteTokenClicked = () => {
    dispatch(deleteToken())
  }

  return (
    <>
      <Button onClick={setTokenClicked}>set 토큰</Button>
      <Button onClick={deleteTokenClicked}>delete 토큰</Button>
    </>
  );
}

export default TestLocalStorage;