import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ArticleDetail from './pages/ArticleDetail'
import Home from './pages/Home'
import Category from './pages/Category'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Auth/login'
import Register from './pages/Auth/register'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <Router>
      <Route exact path= "/" component ={Home}/>
      <Route exact path= "/category" component ={Category}/>
      <Route exact path= "/business" component ={Category}/>
      <Route exact path= "/travel" component ={Category}/>
      <Route exact path= "/entertainment" component ={Category}/>
      <Route exact path= "/about" component ={About}/>
      <Route exact path= "/contact" component ={Contact}/>
      <Route exact path= "/article-detail" component ={ArticleDetail}/>
      <Route exact path= "/login" component ={Login}/>
      <Route exact path= "/register" component ={Register}/>
    </Router>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

