import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Produce_Detail from './Pages/ProductDetail'
import About from './Pages/About'
import Contact from './Pages/Contact'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path= "/About" component ={About}/>
      <Route path= "/Contact" component ={Contact}/>
      <Route path= "/Product_detail" component ={Produce_Detail}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

