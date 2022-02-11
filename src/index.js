import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./pages";
import {BrowserRouter} from "react-router-dom";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

ReactDOM.render(
  <>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
