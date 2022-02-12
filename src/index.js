import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./pages";
import {BrowserRouter} from "react-router-dom";
import {AppProvider} from "./core/store";
import 'antd/dist/antd.css';

ReactDOM.render(
  <>
    <BrowserRouter>
      <AppProvider>
        <Root />
      </AppProvider>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
