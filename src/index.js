import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomePage from './pages/HomePage/Home'
import CategoryPage from './pages/CategoryPage/Category'
import reportWebVitals from './reportWebVitals';
import './assets/images/icons/favicon.png'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './assets/fonts/fontawesome-5.0.8/css/fontawesome-all.min.css' /**Đã xóa file js */
import './assets/fonts/iconic/css/material-design-iconic-font.min.css'
import './assets/vendor/animate/animate.css'
import './assets/vendor/css-hamburgers/hamburgers.min.css'
import './assets/vendor/animsition/css/animsition.min.css'
import './assets/css/util.css'
import './assets/css/util.min.css' 
import './assets/css/main.css'


ReactDOM.render( 
  <React.StrictMode>
    <CategoryPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
