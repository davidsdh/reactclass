import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Page1 from './Page1'
import {BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route exact path = "/" component = {App} />
      <Route exact path = "/page" component = {Page1} />
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
