import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Produce_Detail from './Pages/ProductDetail'
import Home from './Pages/Home'
import Category from './Pages/Category'
import About from './Pages/About'
import Contact from './Pages/Contact'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path= "/Home" component ={Home}/>
      <Route path= "/Category" component ={Category}/>
      <Route path= "/About" component ={About}/>
      <Route path= "/Contact" component ={Contact}/>
      <Route path= "/Product_detail" component ={Produce_Detail}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

