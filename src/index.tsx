import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Login from './pages/login/login.page'
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './pages/home/home';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path='/' component={Login} />
      <Route path='/login' component={App} />
      <Route path='/home' component={Home} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
