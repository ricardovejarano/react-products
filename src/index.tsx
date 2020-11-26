import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './pages/login/login.page'
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path='/login' component={App} />
      <Route exact path='/' component={Login} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
