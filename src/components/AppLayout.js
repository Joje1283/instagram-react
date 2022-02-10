import React from "react";
import "./AppLayout.scss"

export default function AppLayout({children}) {
  return (
    <div className="app">
      <div className="header">
        <div className="page-title">Instagram</div>
        <div className="search">
          <input type="text"/>
        </div>
        <div className="topnav">
          메뉴1 메뉴2 메뉴3
        </div>
      </div>
      <div className="contents">{children}</div>
      <div className="sidebar">sidebar...</div>
      <div className="footer">
        &copy; 2022. Jaesik
      </div>
    </div>
  )
}