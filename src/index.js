import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ArticleDetail from './Pages/ArticleDetail'
import Home from './Pages/Home'
import Category from './Pages/Category'
import About from './Pages/About'
import Contact from './Pages/Contact'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path= "/" component ={Home} exact/>
      <Route exact path= "/category" component ={Category}/>
      <Route exact path= "/about" component ={About}/>
      <Route exact path= "/contact" component ={Contact}/>
      <Route exact path= "/articleDetail" component ={ArticleDetail}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

