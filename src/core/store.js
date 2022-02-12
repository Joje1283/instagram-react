import React, {createContext, useContext } from "react";
import {getStorageItem, setStorageItem} from "./useLocalStorage";
import useReducerWithSideEffects, { UpdateWithSideEffect } from 'use-reducer-with-side-effects';

// 로컬 스토리지에 jwt token을 저장하거나 가져오기 위한 인터페이스를 제공
// required : yarn add use-reducer-with-side-effects
// -> 리듀서가 순수함수의 역할뿐만 아니라 사이드이펙트를 구현 가능하게 해준다.
// -> 사이드이펙트는 로컬 스토리지 수정을 뜻한다

const AppContext = createContext();

const reducer = (prevState, action) => {
  const {type} = action;
  if (type === SET_TOKEN) {
    const { payload: jwtToken } = action;
    const newState = {
      ...prevState,
      jwtToken,
      isAuthenticated: true
    }
    return UpdateWithSideEffect(newState, (state, dispatch) => {
      setStorageItem("jwtToken", jwtToken);
    });
  }
  else if (type === DELETE_TOKEN) {
    const newState = {
      ...prevState,
      jwtToken: "",
      isAuthenticated: false
    }
    return UpdateWithSideEffect(newState, (state, dispatch) => {
      setStorageItem("jwtToken", "");
    });
  }
  return prevState;
}

export const AppProvider = ({ children }) => {
  const jwtToken = getStorageItem("jwtToken", "");
  const [store, dispatch] = useReducerWithSideEffects(reducer, {
    jwtToken: getStorageItem("jwtToken", ""),
    isAuthenticated: (jwtToken.length > 0),
  });
  return (
    <AppContext.Provider value={{ store, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

// Actions
const SET_TOKEN = 'APP/SET_TOKEN';
const DELETE_TOKEN = 'APP/DELETE_TOKEN';

// Action Creators
export const setToken = token => ({type: SET_TOKEN, payload: token});
export const deleteToken = () => ({type: DELETE_TOKEN});