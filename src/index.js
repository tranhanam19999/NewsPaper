import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ArticleDetail from './pages/ArticleDetail'
import Home from './pages/Home'
import Category from './pages/Category'
import About from './pages/About'
import Contact from './pages/Contact'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path= "/" component ={Home}/>
      <Route exact path= "/category" component ={Category}/>
      <Route exact path= "/about" component ={About}/>
      <Route exact path= "/contact" component ={Contact}/>
      <Route exact path= "/articleDetail" component ={ArticleDetail}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

