import React from "react";
import "./AppLayout.scss"
import { Input } from 'antd';
import Menu from './Menu';
import LogoImage from '../assets/logo.png'
import SuggestionList from "./SuggestionList";

const { Search } = Input;

const onSearch = value => console.log(value);

export default function AppLayout({children}) {
  return (
    <div className="app">
      <div className="header">
        <div className="page-title"><img src={LogoImage} alt="logo"/></div>
        <div className="search">
          <Search placeholder="input search text" onSearch={onSearch} style={{ width: 300 }} />
        </div>
        <div className="topnav">
          <Menu />
        </div>
      </div>
      <div className="contents">{children}</div>
      <div className="sidebar"><SuggestionList/></div>
      <div className="footer">
        &copy; 2022. Jaesik
      </div>
    </div>
  )
}