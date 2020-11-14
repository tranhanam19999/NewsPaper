import React from "react";
import logo01 from '../assets/images/banner-01.jpg'

const Header = function(props) {
  return (
    <div>
         {/* Header */}
      <header>
        {/* Header desktop */}
        <div className="container-menu-desktop">
          <div className="topbar">
            <div className="content-topbar container h-100">
              <div className="left-topbar">
                <span className="left-topbar-item flex-wr-s-c">
                  <span>
                    New York, NY                  
                  </span>
                  <img className="m-b-1 m-rl-8" src={logo01} alt="IMG" />
                  <span>
                    HI 58° LO 56°
                  </span>
                </span>
                <a href="#" className="left-topbar-item">
                  About
                </a>
                <a href="#" className="left-topbar-item">
                  Contact
                </a>
                <a href="#" className="left-topbar-item">
                  Sing up
                </a>
                <a href="#" className="left-topbar-item">
                  Log in
                </a>
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
          {/* Header Mobile */}
          <div className="wrap-header-mobile">
            {/* Logo moblie */}		
            <div className="logo-mobile">
              <a href="index.html"><img src={logo01} alt="IMG-LOGO" /></a>
            </div>
            {/* Button show menu */}
            <div className="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8">
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </div>
          </div>
          {/* Menu Mobile */}
          <div className="menu-mobile">
            <ul className="topbar-mobile">
              <li className="left-topbar">
                <span className="left-topbar-item flex-wr-s-c">
                  <span>
                    New York, NY
                  </span>
                  <img className="m-b-1 m-rl-8" src={logo01} alt="IMG" />
                  <span>
                    HI 58° LO 56°
                  </span>
                </span>
              </li>
              <li className="left-topbar">
                <a href="#" className="left-topbar-item">
                  About
                </a>
                <a href="#" className="left-topbar-item">
                  Contact
                </a>
                <a href="#" className="left-topbar-item">
                  Sing up
                </a>
                <a href="#" className="left-topbar-item">
                  Log in
                </a>
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
                <a href="index.html">Home</a>
                <ul className="sub-menu-m">
                  <li><a href="index.html">Homepage v1</a></li>
                  <li><a href="home-02.html">Homepage v2</a></li>
                  <li><a href="home-03.html">Homepage v3</a></li>
                </ul>
                <span className="arrow-main-menu-m">
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </span>
              </li>
              <li>
                <a href="category-01.html">News</a>
              </li>
              <li>
                <a href="category-02.html">Entertainment </a>
              </li>
              <li>
                <a href="category-01.html">Business</a>
              </li>
              <li>
                <a href="category-02.html">Travel</a>
              </li>
              <li>
                <a href="category-01.html">Life Style</a>
              </li>
              <li>
                <a href="category-02.html">Video</a>
              </li>
              <li>
                <a href="#">Features</a>
                <ul className="sub-menu-m">
                  <li><a href="category-01.html">Category Page v1</a></li>
                  <li><a href="category-02.html">Category Page v2</a></li>
                  <li><a href="blog-grid.html">Blog Grid Sidebar</a></li>
                  <li><a href="blog-list-01.html">Blog List Sidebar v1</a></li>
                  <li><a href="blog-list-02.html">Blog List Sidebar v2</a></li>
                  <li><a href="blog-detail-01.html">Blog Detail Sidebar</a></li>
                  <li><a href="blog-detail-02.html">Blog Detail No Sidebar</a></li>
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
                <span className="arrow-main-menu-m">
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </span>
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="wrap-logo container">
            {/* Logo desktop */}		
            <div className="logo">
              <a href="index.html"><img src={logo01} alt="LOGO" /></a>
            </div>	
            {/* Banner */}
            <div className="banner-header">
              <a href="#"><img src={logo01} alt="IMG" /></a>
            </div>
          </div>	
          {/*  */}
          <div className="wrap-main-nav">
            <div className="main-nav">
              {/* Menu desktop */}
              <nav className="menu-desktop">
                <a className="logo-stick" href="index.html">
                  <img src={logo01} alt="LOGO" />
                </a>
                <ul className="main-menu">
                  <li>
                    <a href="index.html">Home</a>
                    <ul className="sub-menu">
                      <li><a href="index.html">Homepage v1</a></li>
                      <li><a href="home-02.html">Homepage v2</a></li>
                      <li><a href="home-03.html">Homepage v3</a></li>
                    </ul>
                  </li>
                  <li className="mega-menu-item">
                    <a href="category-01.html">News</a>
                    <div className="sub-mega-menu">
                      <div className="nav flex-column nav-pills" role="tablist">
                        <a className="nav-link active" data-toggle="pill" href="#news-0" role="tab">All</a>
                        <a className="nav-link" data-toggle="pill" href="#news-1" role="tab">Entertaiment</a>
                        <a className="nav-link" data-toggle="pill" href="#news-2" role="tab">Fashion</a>
                        <a className="nav-link" data-toggle="pill" href="#news-3" role="tab">Life Style</a>
                        <a className="nav-link" data-toggle="pill" href="#news-4" role="tab">Technology</a>
                        <a className="nav-link" data-toggle="pill" href="#news-5" role="tab">Travel</a>
                      </div>
                      <div className="tab-content">
                        <div className="tab-pane show active" id="news-0" role="tabpanel">
                          <div className="row">
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                  <img src={logo01}  alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 18
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                  <img src={logo01}  alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Finance
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 15
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Beach
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 12
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Technology
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 20
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="news-1" role="tabpanel">
                          <div className="row">
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 18
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                  <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 12
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                  <img src={logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 20
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                  <img src={logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 15
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="news-2" role="tabpanel">
                          <div className="row">
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                  <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 18
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                  <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 15
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                  <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 12
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                  <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 20
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="news-3" role="tabpanel">
                          <div className="row">
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                  <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 18
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 20
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 12
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 15
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="news-4" role="tabpanel">
                          <div className="row">
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 18
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 12
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 20
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 15
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="news-5" role="tabpanel">
                          <div className="row">
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 18
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 20
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 15
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 12
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mega-menu-item">
                    <a href="category-02.html">Entertainment </a>
                    <div className="sub-mega-menu">
                      <div className="nav flex-column nav-pills" role="tablist">
                        <a className="nav-link active" data-toggle="pill" href="#enter-1" role="tab">All</a>
                        <a className="nav-link" data-toggle="pill" href="#enter-2" role="tab">Game</a>
                        <a className="nav-link" data-toggle="pill" href="#enter-3" role="tab">Celebrity</a>
                      </div>
                      <div className="tab-content">
                        <div className="tab-pane show active" id="enter-1" role="tabpanel">
                          <div className="row">
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 18
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 20
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 12
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 15
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="enter-2" role="tabpanel">
                          <div className="row">
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 18
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 12
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 20
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 15
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="enter-3" role="tabpanel">
                          <div className="row">
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 18
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 20
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 15
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 12
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mega-menu-item">
                    <a href="category-01.html">Business</a>
                    <div className="sub-mega-menu">
                      <div className="nav flex-column nav-pills" role="tablist">
                        <a className="nav-link active" data-toggle="pill" href="#business-1" role="tab">All</a>
                        <a className="nav-link" data-toggle="pill" href="#business-2" role="tab">Economy</a>
                      </div>
                      <div className="tab-content">
                        <div className="tab-pane show active" id="business-1" role="tabpanel">
                          <div className="row">
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 18
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 20
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 12
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 15
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="business-2" role="tabpanel">
                          <div className="row">
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 18
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 12
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 20
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 15
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mega-menu-item">
                    <a href="category-02.html">Travel</a>
                    <div className="sub-mega-menu">
                      <div className="nav flex-column nav-pills" role="tablist">
                        <a className="nav-link active" data-toggle="pill" href="#travel-1" role="tab">All</a>
                        <a className="nav-link" data-toggle="pill" href="#travel-2" role="tab">Hotels</a>
                      </div>
                      <div className="tab-content">
                        <div className="tab-pane show active" id="travel-1" role="tabpanel">
                          <div className="row">
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 18
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 20
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 15
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 12
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="travel-2" role="tabpanel">
                          <div className="row">
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 18
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 12
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 20
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 15
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mega-menu-item">
                    <a href="category-01.html">Life Style</a>
                    <div className="sub-mega-menu">
                      <div className="nav flex-column nav-pills" role="tablist">
                        <a className="nav-link active" data-toggle="pill" href="#life-1" role="tab">All</a>
                      </div>
                      <div className="tab-content">
                        <div className="tab-pane show active" id="life-1" role="tabpanel">
                          <div className="row">
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 18
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 20
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 12
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 15
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mega-menu-item">
                    <a href="category-02.html">Video</a>
                    <div className="sub-mega-menu">
                      <div className="nav flex-column nav-pills" role="tablist">
                        <a className="nav-link active" data-toggle="pill" href="#video-1" role="tab">All</a>
                      </div>
                      <div className="tab-content">
                        <div className="tab-pane show active" id="video-1" role="tabpanel">
                          <div className="row">
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 18
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Feb 12
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 20
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              {/* Item post */}	
                              <div>
                                <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                   <img src={ logo01} alt="IMG" />
                                </a>
                                <div className="p-t-10">
                                  <h5 className="p-b-5">
                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                      Donec metus orci, malesuada et lectus vitae
                                    </a>
                                  </h5>
                                  <span className="cl8">
                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                      Music
                                    </a>
                                    <span className="f1-s-3 m-rl-3">
                                      -
                                    </span>
                                    <span className="f1-s-3">
                                      Jan 15
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="main-menu-active">
                    <a href="#">Features</a>
                    <ul className="sub-menu">
                      <li><a href="category-01.html">Category Page v1</a></li>
                      <li><a href="category-02.html">Category Page v2</a></li>
                      <li><a href="blog-grid.html">Blog Grid Sidebar</a></li>
                      <li><a href="blog-list-01.html">Blog List Sidebar v1</a></li>
                      <li><a href="blog-list-02.html">Blog List Sidebar v2</a></li>
                      <li><a href="blog-detail-01.html">Blog Detail Sidebar</a></li>
                      <li><a href="blog-detail-02.html">Blog Detail No Sidebar</a></li>
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>	
        </div>
      </header>
    </div>
  );
}
 
export default Header;