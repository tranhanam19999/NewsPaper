import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomePage from './pages/HomePage/Home'
import CategoryPage from './pages/CategoryPage/Category'
import reportWebVitals from './reportWebVitals';

ReactDOM.render( 
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
