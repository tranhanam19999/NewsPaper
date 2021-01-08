import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticel } from "../../store/article";

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import img1 from "../../assets/images/icons/icon-night.png";
import logo from "../../assets/images/icons/logo-01.png";
import imgbanner from "../../assets/images/banner-01.jpg";
import ItemArticleHeader from "../ItemArticleHeader/itemArticleHeader";



const Header = (props) => {

  

  const [category, setCategory] = useState("All");

  const dispatch = useDispatch();

  const article = useSelector((state) => state.article);

  const articleEntertainment = [];
  const articleBusiness = [];
  const articleTravel = [];
  const articleNew = [];

  useEffect( () => {
    async function fetch(){
      dispatch(getArticel());
    } 
   fetch()  
  }, []);


    

  article.map((item, idx) => {
    if (item.category == "Entertainment") {
      articleEntertainment.push(item);
    }
    if (item.category == "Cook") {
      articleBusiness.push(item);
    }
    if (item.category == "IT") {
      articleTravel.push(item);
    }
    if (item.category == "Fun") {
      articleNew.push(item);
    }
  });

  
    console.log(article.length, "article")
  if(article.length == 0){
    return(<div></div>)
  }
  return (
    <header>
      <div className="container-menu-desktop">
        <div className="topbar">
          <div className="content-topbar container h-100">
            <div className="left-topbar">
              <span className="left-topbar-item flex-wr-s-c">
                <span>New York, NY</span>
                <img className="m-b-1 m-rl-8" src={img1} alt="IMG" />
                <span>HI 58° LO 56°</span>
              </span>
              <Link to="/about" className="left-topbar-item">
                About
              </Link>
              <Link to="/contact" className="left-topbar-item">
                Contact
              </Link>
              <Link to="/login" className="left-topbar-item">
                Log in
              </Link>
              <Link to="/register" className="left-topbar-item">
                Register
              </Link>
            </div>
            <div className="right-topbar">
              <a href="#">
                <span className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <span className="fab fa-twitter" />
              </a>
              <a href="#">
                <span className="fab fa-pinterest-p" />
              </a>
              <a href="#">
                <span className="fab fa-vimeo-v" />
              </a>
              <a href="#">
                <span className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
        <div className="wrap-header-mobile">
          <div className="logo-mobile">
            <a href="/">
              <img src={logo} alt="IMG-LOGO" />
            </a>
          </div>
          <div className="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </div>
        </div>
        <div className="menu-mobile">
          <ul className="topbar-mobile">
            <li className="left-topbar">
              <span className="left-topbar-item flex-wr-s-c">
                <span>New York, NY</span>
                <img
                  className="m-b-1 m-rl-8"
                  src="images/icons/icon-night.png"
                  alt="IMG"
                />
                <span>HI 58° LO 56°</span>
              </span>
            </li>
            <li className="left-topbar">
              <Link to="/about" className="left-topbar-item">
                About
              </Link>
              <Link to="/contact" className="left-topbar-item">
                Contact
              </Link>
              <Link to="#" className="left-topbar-item">
                Sing up
              </Link>
              <Link to="#" className="left-topbar-item">
                Log in
              </Link>
            </li>
            <li className="right-topbar">
              <a href="#">
                <span className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <span className="fab fa-twitter" />
              </a>
              <a href="#">
                <span className="fab fa-pinterest-p" />
              </a>
              <a href="#">
                <span className="fab fa-vimeo-v" />
              </a>
              <a href="#">
                <span className="fab fa-youtube" />
              </a>
            </li>
          </ul>
          <ul className="main-menu-m">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={{ pathname: `/` }}>News</Link>
            </li>
            <li>
              <Link to={{ pathname: `/category`, state: articleEntertainment }}>Entertainment</Link>
            </li>
            <li>
              <Link to={{ pathname: `/category`, state: articleBusiness }}>Business</Link>
            </li>
            <li>
              <Link to={{ pathname: `/category`, state: articleTravel }}>Travel</Link>
            </li>
          </ul>
        </div>
        <div className="wrap-logo container">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="LOGO" />
            </a>
          </div>
          <div className="banner-header">
            <a href="https://themewagon.com/themes/free-bootstrap-4-html5-news-website-template-magnews2/">
              <img src={imgbanner} alt="IMG" />
            </a>
          </div>
        </div>
        <div className="wrap-main-nav">
          <div className="main-nav">
            <nav className="menu-desktop">
              <a className="logo-stick" href="index.html">
                <img src={logo} alt="LOGO" />
              </a>
              <ul className="main-menu">
                <li className="main-menu-active">
                  <Link to="/">Home</Link>
                </li>
                <li className="mega-menu-item">
                  
                  <a href="/">News</a>
                  <div className="sub-mega-menu">
                    <div >
                      
                      
                    </div>

                    <div className="tab-content">
                      <div
                        className={
                          category == "All"
                            ? "tab-pane show active"
                            : "tab-pane"
                        }
                        onMouseEnter={() => setCategory("All")}
                        id="news-0"
                        role="tabpanel"
                      >
                        <div className="row">
                          {articleEntertainment.map((item, idx) => {
                            if(idx > 0 && idx <= 6){
                            return <ItemArticleHeader data={item}/>;
                           }
                          })}
                        </div>
                      </div>
                      
                      <div
                        className={
                          category == "Life Style"
                            ? "tab-pane show active"
                            : "tab-pane"
                        }
                        onMouseEnter={() => setCategory("Life Style")}
                        id="news-3"
                        role="tabpanel"
                      >
                        <div className="row">
                          
                          {articleTravel.map((item, idx) => {
                            if(idx > 0 && idx <= 6){
                            return <ItemArticleHeader data={item}/>;
                           }
                          })}
                        </div>
                      </div>
                      
                      
                    </div>
                  </div>
                </li>
                <li className="mega-menu-item">
                <Link to={{ pathname: `/category`, state: articleEntertainment }}>Entertainment</Link>
                
                  <div className="sub-mega-menu">
                    <div >
                      
                    </div>
                    <div className="tab-content">
                      <div
                        className={
                          category == "All"
                            ? "tab-pane show active"
                            : "tab-pane"
                        }
                        onMouseEnter={() => setCategory("All")}
                        id="enter-1"
                        role="tabpanel"
                      >
                        <div className="row">
                        {articleNew.map((item, idx) => {
                            if(idx > 0 && idx <= 6){
                            return <ItemArticleHeader data={item}/>;
                           }
                          })}
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </li>
                <li className="mega-menu-item">
                <Link to={{ pathname: `/category`, state: articleBusiness }}>Business</Link>
                
                  <div className="sub-mega-menu">
                    <div >
                      
                    </div>
                    <div className="tab-content">
                      <div
                        className={
                          category == "All"
                            ? "tab-pane show active"
                            : "tab-pane"
                        }
                        onMouseEnter={() => setCategory("All")}
                        id="business-1"
                        role="tabpanel"
                      >
                        <div className="row">
                        {articleEntertainment.map((item, idx) => {
                            if(idx > 0 && idx <= 6){
                            return <ItemArticleHeader data={item}/>;
                           }
                          })}
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </li>
                <li className="mega-menu-item">
                <Link to={{ pathname: `/category`, state: articleTravel }}>Travel</Link>
                  <div className="sub-mega-menu">
                    <div >
                      
                    </div>
                    <div className="tab-content">
                      <div
                        className={
                          category == "All"
                            ? "tab-pane show active"
                            : "tab-pane"
                        }
                        onMouseEnter={() => setCategory("All")}
                        id="travel-1"
                        role="tabpanel"
                      >
                        <div className="row">
                        {articleNew.map((item, idx) => {
                            if(idx > 0 && idx <= 6){
                            return <ItemArticleHeader data={item} />;
                           }
                          })}
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
