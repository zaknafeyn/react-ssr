// Starting point for client side app

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
  , document.getElementById("root"));
