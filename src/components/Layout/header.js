import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import img1 from '../../assets/images/icons/icon-night.png'
import logo from "../../assets/images/icons/logo-01.png" 
const Header = props =>{
  const [category,setCategory] = useState('All')
   return(
    <header>
          <div className="container-menu-desktop">
            <div className="topbar">
              <div className="content-topbar container h-100">
                <div className="left-topbar">
                  <span className="left-topbar-item flex-wr-s-c">
                    <span>
                      VietNam, HN
                    </span>
                    <img className="m-b-1 m-rl-8" src={img1} alt="IMG" />
                    <span>
                      HI 58° LO 56°
                    </span>
                  </span>
                  <Link to="/about" className="left-topbar-item">Giới Thiệu</Link>
                  <Link to="/contact" className="left-topbar-item">Liên Hệ</Link>
                  <Link to="/login" className="left-topbar-item">Đăng Nhập</Link>
                  <Link to="/register" className="left-topbar-item">Đăng Ký</Link>
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
                <a href="index.html"><img src="images/icons/logo-01.png" alt="IMG-LOGO" /></a>
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
                    <span>
                      VietNam, HN
                    </span>
                    <img className="m-b-1 m-rl-8" src={img1} alt="IMG" />
                    <span>
                      HI 58° LO 56°
                    </span>
                  </span>
                </li>
                <li className="left-topbar">
                  <Link to="/about" className="left-topbar-item">Giới Thiệu</Link>
                  <Link to="/contact" className="left-topbar-item">Liên Hệ</Link>
                  <Link to="#" className="left-topbar-item">Đăng Nhập</Link>
                  <Link to="#" className="left-topbar-item">Đăng Ký</Link>
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
                  {/* <a href="index.html">Home</a> */}
                  <Link to="/">Trang Chủ</Link>
                 
                </li>
                <li>
                <Link to="/category">Tin Tức</Link>
                </li>
                <li>
                  <Link to="/category">Giải Trí</Link>
                </li>
                <li>
                <Link to="/category">Kinh Doanh</Link>
                </li>
                <li>
                  <Link to="/category">Du Lịch</Link>
                </li>
               
               
              </ul>
            </div>
            <div className="wrap-logo container">
              <div className="logo">
                <a href="/"><img src={logo} alt="LOGO" /></a>
              </div>	
              <div className="banner-header">
                <a href="https://themewagon.com/themes/free-bootstrap-4-html5-news-website-template-magnews2/"><img src="images/banner-01.jpg" alt="IMG" /></a>
              </div>
            </div>	
            <div className="wrap-main-nav">
              <div className="main-nav">
                <nav className="menu-desktop">
                  <a className="logo-stick" href="index.html">
                    <img src="images/icons/logo-01.png" alt="LOGO" />
                  </a>
                  <ul className="main-menu">
                    <li className="main-menu-active">
                      <Link to="/">Trang Chủ</Link>
                     
                    </li>
                    <li className="mega-menu-item">
                      <a href="/category">Tin Tức</a>
                      <div className="sub-mega-menu">
                        <div className="nav flex-column nav-pills" role="tablist">
                          <a className={category == 'All' ? "nav-link active" : "nav-link"} onMouseEnter={() => setCategory('All')}
                          data-toggle="pill" href="#news-0" role="tab">Tất Cả</a>

                          <a className={category == 'Entertaiment' ? "nav-link active" : "nav-link"} onMouseEnter={() => setCategory('Entertaiment')} 
                          data-toggle="pill" href="#news-1" role="tab">Giải trí</a>
                          
                          <a className={category == 'Fashion' ? "nav-link active" : "nav-link"} onMouseEnter={() => setCategory('Fashion')}
                          data-toggle="pill" href="#news-2" role="tab">Thời Trang</a>

                          <a className={category == 'Life Style' ? "nav-link active" : "nav-link"} onMouseEnter={() => setCategory('Life Style')}
                          data-toggle="pill" href="#news-3" role="tab">Cách Sống</a>

                          <a className={category == 'Technology' ? "nav-link active" : "nav-link"} onMouseEnter={() => setCategory('Technology')}
                          data-toggle="pill" href="#news-4" role="tab">Công nghệ</a>

                          <a className={category == 'Travel' ? "nav-link active" : "nav-link"} onMouseEnter={() => setCategory('Travel')}
                          data-toggle="pill" href="#news-5" role="tab">Du Lịch</a>

                        </div>

                        <div className="tab-content">
                          <div className={category == 'All' ? "tab-pane show active" : "tab-pane"} onMouseEnter={() => setCategory('All')} id="news-0" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-05.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-10.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-14.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-36.jpg" alt="IMG" />
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
                          <div className={category == 'Entertaiment' ? "tab-pane show active" : "tab-pane"} onMouseEnter={() => setCategory('Entertaiment')} id="news-1" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-50.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-08.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-07.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-06.jpg" alt="IMG" />
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
                          <div className={category == 'Fashion' ? "tab-pane show active" : "tab-pane"} onMouseEnter={() => setCategory('Fashion')} id="news-2" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-21.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-24.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-22.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-23.jpg" alt="IMG" />
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
                          <div className={category == 'Life Style' ? "tab-pane show active" : "tab-pane"} onMouseEnter={() => setCategory('Life Style')} id="news-3" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-25.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-27.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-26.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-34.jpg" alt="IMG" />
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
                          <div className={category == 'Technology' ? "tab-pane show active" : "tab-pane"} onMouseEnter={() => setCategory('Technology')} id="news-4" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-35.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-36.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-37.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-38.jpg" alt="IMG" />
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
                          <div className={category == 'Travel' ? "tab-pane show active" : "tab-pane"} onMouseEnter={() => setCategory('Travel')} id="news-5" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-39.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-41.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-42.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-40.jpg" alt="IMG" />
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
                      <Link to="/category">Giải Trí</Link>
                      <div className="sub-mega-menu">
                        <div className="nav flex-column nav-pills" role="tablist">
                          <a className={category == 'All' ? "nav-link active" : "nav-link"} onMouseEnter={() => setCategory('All')}
                           data-toggle="pill" href="#enter-1" role="tab">Tất Cả</a>
                          <a className={category == 'Game' ? "nav-link active" : "nav-link"} onMouseEnter={() => setCategory('Game')}
                           data-toggle="pill" href="#enter-2" role="tab">Trò chơi</a>
                          <a className={category == 'Celebrity' ? "nav-link active" : "nav-link"} onMouseEnter={() => setCategory('Celebrity')}
                           data-toggle="pill" href="#enter-3" role="tab">Người Nổi Tiếng</a>
                        </div>
                        <div className="tab-content">
                          <div className={category == 'All' ? "tab-pane show active" : "tab-pane"} onMouseEnter={() => setCategory('All')} id="enter-1" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-25.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-27.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-26.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-34.jpg" alt="IMG" />
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
                          <div className={category == 'Game' ? "tab-pane show active" : "tab-pane"} onMouseEnter={() => setCategory('Game')} id="enter-2" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-35.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-36.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-37.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-38.jpg" alt="IMG" />
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
                          <div className={category == 'Celebrity' ? "tab-pane show active" : "tab-pane"} onMouseEnter={() => setCategory('Celebrity')} id="enter-3" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-39.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-41.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-42.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-40.jpg" alt="IMG" />
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
                    <Link to="/category">Kinh Doanh</Link>
                      <div className="sub-mega-menu">
                        <div className="nav flex-column nav-pills" role="tablist">
                          <a className={category == 'All' ? "nav-link active" : "nav-link"} onMouseEnter={() => setCategory('All')}
                           data-toggle="pill" href="#business-1" role="tab">Tất Cả</a>
                          <a className={category == 'Economy' ? "nav-link active" : "nav-link"} onMouseEnter={() => setCategory('Economy')}
                           data-toggle="pill" href="#business-2" role="tab">Kinh Tế</a>
                        </div>
                        <div className="tab-content">
                          <div className={category == 'All' ? "tab-pane show active" : "tab-pane"} onMouseEnter={() => setCategory('All')} id="business-1" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-10.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-11.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-26.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-34.jpg" alt="IMG" />
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
                          <div className={category == 'Economy' ? "tab-pane show active" : "tab-pane"} onMouseEnter={() => setCategory('Economy')} id="business-2" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-35.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-36.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-37.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-38.jpg" alt="IMG" />
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
                      <Link to="/category">Du Lịch</Link>
                      <div className="sub-mega-menu">
                        <div className="nav flex-column nav-pills" role="tablist">
                          <a className={category == 'All' ? "nav-link active" : "nav-link"} onMouseEnter={() => setCategory('All')}
                           data-toggle="pill" href="#travel-1" role="tab">Tất Cả</a>
                          <a className={category == 'Hotels' ? "nav-link active" : "nav-link"} onMouseEnter={() => setCategory('Hotels')}
                           data-toggle="pill" href="#travel-2" role="tab">Khách Sạn</a>
                        </div>
                        <div className="tab-content">
                          <div className={category == 'All' ? "tab-pane show active" : "tab-pane"} onMouseEnter={() => setCategory('All')} id="travel-1" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-39.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-41.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-42.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-40.jpg" alt="IMG" />
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
                          <div className={category == 'Hotels' ? "tab-pane show active" : "tab-pane"} onMouseEnter={() => setCategory('Hotels')} id="travel-2" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-35.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-36.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-37.jpg" alt="IMG" />
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
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src="images/post-38.jpg" alt="IMG" />
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
                    
                   
                    
                  </ul>
                </nav>
              </div>
            </div>	
          </div>
        </header>
   )

}

export default Header