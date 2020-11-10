import React from 'react'
import Iconnight from '../../assets/images/icons/icon-night.png'
import Logo1 from '../../assets/images/icons/logo-01.png'
import Logo2 from '../../assets/images/icons/logo-02.png'
import banner1 from '../../assets/images/banner-01.jpg'
import Banner2 from '../../assets/images/banner-02.jpg'
import img1 from '../../assets/images/post-01.jpg'
import img2 from '../../assets/images/post-02.jpg'
import img3 from '../../assets/images/post-03.jpg'
import img4 from '../../assets/images/post-04.jpg'
import img5 from '../../assets/images/post-05.jpg'
import img6 from '../../assets/images/post-06.jpg'
import img7 from '../../assets/images/post-07.jpg'
import img8 from '../../assets/images/post-08.jpg'
import img10 from '../../assets/images/post-10.jpg'
import img11 from '../../assets/images/post-11.jpg'
import img12 from '../../assets/images/post-12.jpg'
import img13 from '../../assets/images/post-13.jpg'
import img14 from '../../assets/images/post-14.jpg'
import img15 from '../../assets/images/post-15.jpg'
import img16 from '../../assets/images/post-16.jpg'
import img17 from '../../assets/images/post-17.jpg'
import img25 from '../../assets/images/post-25.jpg'
import img26 from '../../assets/images/post-26.jpg'
import img27 from '../../assets/images/post-27.jpg'
import img34 from '../../assets/images/post-34.jpg'
import img36 from '../../assets/images/post-36.jpg'
import img39 from '../../assets/images/post-39.jpg'
import img40 from '../../assets/images/post-40.jpg'
import img41 from '../../assets/images/post-41.jpg'
import img42 from '../../assets/images/post-42.jpg'
import img50 from '../../assets/images/post-50.jpg'
import popularpost01 from '../../assets/images/popular-post-01.jpg'
import popularpost02 from '../../assets/images/popular-post-02.jpg'
import popularpost03 from '../../assets/images/popular-post-03.jpg'
import entertaiment02 from '../../assets/images/entertaiment-02.jpg'
import entertaiment03 from '../../assets/images/entertaiment-03.jpg'
import entertaiment04 from '../../assets/images/entertaiment-04.jpg'
import entertaiment05 from '../../assets/images/entertaiment-05.jpg'
import entertaiment06 from '../../assets/images/entertaiment-06.jpg'
import entertaiment16 from '../../assets/images/entertaiment-16.jpg'
import entertaiment17 from '../../assets/images/entertaiment-17.jpg'
import entertaiment18 from '../../assets/images/entertaiment-18.jpg'
import entertaiment19 from '../../assets/images/entertaiment-19.jpg'
import entertaiment20 from '../../assets/images/entertaiment-20.jpg'
import entertaiment21 from '../../assets/images/entertaiment-21.jpg'


class CategoryPage extends React.Component{
    render(){
        return(
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
                    <img className="m-b-1 m-rl-8" src={Iconnight} alt="IMG" />
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
                <a href="index.html"><img src={Logo1} alt="IMG-LOGO" /></a>
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
                    <img className="m-b-1 m-rl-8" src={Iconnight} alt="IMG" />
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
                <a href="index.html"><img src={Logo1} alt="LOGO" /></a>
              </div>	
              {/* Banner */}
              <div className="banner-header">
                <a href="#"><img src={banner1} alt="IMG" /></a>
              </div>
            </div>	
            {/*  */}
            <div className="wrap-main-nav">
              <div className="main-nav">
                {/* Menu desktop */}
                <nav className="menu-desktop">
                  <a className="logo-stick" href="index.html">
                    <img src="" alt="LOGO" />
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
                                    <img src={img5} alt="IMG" />
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
                                    <img src={img10} alt="IMG" />
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
                                    <img src={img14} alt="IMG" />
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
                                    <img src={img36} alt="IMG" />
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
                                    <img src={img50} alt="IMG" />
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
                                    <img src={img8} alt="IMG" />
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
                                    <img src={img7} alt="IMG" />
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
                                    <img src={img6} alt="IMG" />
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
                                {/* Item post */}	
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
                                {/* Item post */}	
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
                                {/* Item post */}	
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
                          <div className="tab-pane" id="news-3" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src={img25} alt="IMG" />
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
                                    <img src={img27} alt="IMG" />
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
                                    <img src={img26} alt="IMG" />
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
                                    <img src={img34} alt="IMG" />
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
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src={img36} alt="IMG" />
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
                                {/* Item post */}	
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
                          <div className="tab-pane" id="news-5" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src={img39} alt="IMG" />
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
                                    <img src={img41} alt="IMG" />
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
                                    <img src={img42} alt="IMG" />
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
                                    <img src={img40} alt="IMG" />
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
                    <li className="mega-menu-item main-menu-active">
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
                                    <img src={img25} alt="IMG" />
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
                                    <img src={img27} alt="IMG" />
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
                                    <img src={img26} alt="IMG" />
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
                                    <img src={img34} alt="IMG" />
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
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src={img36} alt="IMG" />
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
                                {/* Item post */}	
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
                          <div className="tab-pane" id="enter-3" role="tabpanel">
                            <div className="row">
                              <div className="col-3">
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src={img39} alt="IMG" />
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
                                    <img src={img41} alt="IMG" />
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
                                    <img src={img42} alt="IMG" />
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
                                    <img src={img40} alt="IMG" />
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
                                    <img src={img10} alt="IMG" />
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
                                    <img src={img11} alt="IMG" />
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
                                    <img src={img26} alt="IMG" />
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
                                    <img src={img34} alt="IMG" />
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
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src={img36} alt="IMG" />
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
                                {/* Item post */}	
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
                                    <img src={img39} alt="IMG" />
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
                                    <img src={img41} alt="IMG" />
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
                                    <img src={img42} alt="IMG" />
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
                                    <img src={img40} alt="IMG" />
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
                                {/* Item post */}	
                                <div>
                                  <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                    <img src={img36} alt="IMG" />
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
                                {/* Item post */}	
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
                                    <img src={img25} alt="IMG" />
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
                                    <img src={img27} alt="IMG" />
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
                                    <img src={img26} alt="IMG" />
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
                                    <img src={img34} alt="IMG" />
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
                                    <img src={img50} alt="IMG" />
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
                                    <img src={img8} alt="IMG" />
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
                                    <img src={img7} alt="IMG" />
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
                                    <img src={img6} alt="IMG" />
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
                    <li>
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
        {/* Breadcrumb */}
        <div className="container">
          <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
            <div className="f2-s-1 p-r-30 m-tb-6">
              <a href="index.html" className="breadcrumb-item f1-s-3 cl9">
                Home 
              </a>
              <a href="category-01.html" className="breadcrumb-item f1-s-3 cl9">
                Category
              </a>
              <span className="breadcrumb-item f1-s-3 cl9">
                Entertaiment
              </span>
            </div>
            <div className="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6">
              <input className="f1-s-1 cl6 plh9 s-full p-l-25 p-r-45" type="text" name="search" placeholder="Search" />
              <button className="flex-c-c size-a-1 ab-t-r fs-20 cl2 hov-cl10 trans-03">
                <i className="zmdi zmdi-search" />
              </button>
            </div>
          </div>
        </div>
        {/* Page heading */}
        <div className="container p-t-4 p-b-40">
          <h2 className="f1-l-1 cl2">
            Entertaiment
          </h2>
        </div>
        {/* Feature post */}
        <section className="bg0">
          <div className="container">
            <div className="row m-rl--1">
              <div className="col-12 p-rl-1 p-b-2">
                <div className="bg-img1 size-a-3 how1 pos-relative" style={{backgroundImage: `url(${entertaiment16})`}}>
                  <a href="blog-detail-01.html" className="dis-block how1-child1 trans-03" />
                  <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                    <a href="#" className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                      Celebrity
                    </a>
                    <h3 className="how1-child2 m-t-14 m-b-10">
                      <a href="blog-detail-01.html" className="how-txt1 size-a-6 f1-l-1 cl0 hov-cl10 trans-03">
                        Music quisque at ipsum vel orci eleifend ultrices
                      </a>
                    </h3>
                    <span className="how1-child2">
                      <span className="f1-s-4 cl11">
                        Jack Sims
                      </span>
                      <span className="f1-s-3 cl11 m-rl-3">
                        -
                      </span>
                      <span className="f1-s-3 cl11">
                        Feb 16
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 p-rl-1 p-b-2">
                <div className="bg-img1 size-a-14 how1 pos-relative" style={{backgroundImage: `url(${entertaiment02})`}}>
                  <a href="blog-detail-01.html" className="dis-block how1-child1 trans-03" />
                  <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                    <a href="#" className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                      Game
                    </a>
                    <h3 className="how1-child2 m-t-14">
                      <a href="blog-detail-01.html" className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03">
                        Pellentesque dui nibh, pellen-tesque ut dapibus ut
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 p-rl-1 p-b-2">
                <div className="bg-img1 size-a-14 how1 pos-relative" style={{backgroundImage: `url(${entertaiment03})`}}>
                  <a href="blog-detail-01.html" className="dis-block how1-child1 trans-03" />
                  <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                    <a href="#" className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                      Music
                    </a>
                    <h3 className="how1-child2 m-t-14">
                      <a href="blog-detail-01.html" className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03">
                        Motobike Vestibulum vene-natis purus nec nibh volutpat
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 p-rl-1 p-b-2">
                <div className="bg-img1 size-a-14 how1 pos-relative" style={{backgroundImage: `url(${entertaiment04})`}}>
                  <a href="blog-detail-01.html" className="dis-block how1-child1 trans-03" />
                  <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                    <a href="#" className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                      Game
                    </a>
                    <h3 className="how1-child2 m-t-14">
                      <a href="blog-detail-01.html" className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03">
                        Pellentesque dui nibh, pellen-tesque ut dapibus ut
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 p-rl-1 p-b-2">
                <div className="bg-img1 size-a-14 how1 pos-relative" style={{backgroundImage: `url(${entertaiment05})`}}>
                  <a href="blog-detail-01.html" className="dis-block how1-child1 trans-03" />
                  <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                    <a href="#" className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                      Music
                    </a>
                    <h3 className="how1-child2 m-t-14">
                      <a href="blog-detail-01.html" className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03">
                        Motobike Vestibulum vene-natis purus nec nibh volutpat
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Post */}
        <section className="bg0 p-t-110 p-b-25">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8 p-b-80">
                <div className="row">
                  <div className="col-sm-6 p-r-25 p-r-15-sr991">
                    {/* Item */}
                    <div className="p-b-53">
                      <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                        <img src={entertaiment06} alt="IMG" />
                      </a>
                      <div className="flex-col-s-c p-t-16">
                        <h5 className="p-b-5 txt-center">
                          <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                            You wish lorem ipsum dolor sit amet consectetur 
                          </a>
                        </h5>
                        <div className="cl8 txt-center p-b-17">
                          <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                            Celebrity
                          </a>
                          <span className="f1-s-3 m-rl-3">
                            -
                          </span>
                          <span className="f1-s-3">
                            Feb 18
                          </span>
                        </div>
                        <p className="f1-s-11 cl6 txt-center p-b-16">
                          Curabitur volutpat bibendum molestie. Vestibulum ornare gravida semper. Aliquam a dui suscipit, fringilla metus id, maximus leo.
                        </p>
                        <a href="blog-detail-01.html" className="f1-s-1 cl9 hov-cl10 trans-03">
                          Read More
                          <i className="m-l-2 fa fa-long-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                    {/* Item */}
                    <div className="p-b-53">
                      <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                        <img src={entertaiment17} alt="IMG" />
                      </a>
                      <div className="flex-col-s-c p-t-16">
                        <h5 className="p-b-5 txt-center">
                          <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                            Curabitur lacinia nisl eget aliquet porttitor
                          </a>
                        </h5>
                        <div className="cl8 txt-center p-b-17">
                          <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                            Celebrity
                          </a>
                          <span className="f1-s-3 m-rl-3">
                            -
                          </span>
                          <span className="f1-s-3">
                            Feb 18
                          </span>
                        </div>
                        <p className="f1-s-11 cl6 txt-center p-b-16">
                          Curabitur volutpat bibendum molestie. Vestibulum ornare gravida semper. Aliquam a dui suscipit, fringilla metus id, maximus leo.
                        </p>
                        <a href="blog-detail-01.html" className="f1-s-1 cl9 hov-cl10 trans-03">
                          Read More
                          <i className="m-l-2 fa fa-long-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                    {/* Item */}
                    <div className="p-b-53">
                      <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                        <img src={entertaiment18} alt="IMG" />
                      </a>
                      <div className="flex-col-s-c p-t-16">
                        <h5 className="p-b-5 txt-center">
                          <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                            Vestibulum euismod lorem sed porttitor bibendum
                          </a>
                        </h5>
                        <div className="cl8 txt-center p-b-17">
                          <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                            Celebrity
                          </a>
                          <span className="f1-s-3 m-rl-3">
                            -
                          </span>
                          <span className="f1-s-3">
                            Feb 18
                          </span>
                        </div>
                        <p className="f1-s-11 cl6 txt-center p-b-16">
                          Curabitur volutpat bibendum molestie. Vestibulum ornare gravida semper. Aliquam a dui suscipit, fringilla metus id, maximus leo.
                        </p>
                        <a href="blog-detail-01.html" className="f1-s-1 cl9 hov-cl10 trans-03">
                          Read More
                          <i className="m-l-2 fa fa-long-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 p-r-25 p-r-15-sr991">
                    {/* Item */}
                    <div className="p-b-53">
                      <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                        <img src={entertaiment19} alt="IMG" />
                      </a>
                      <div className="flex-col-s-c p-t-16">
                        <h5 className="p-b-5 txt-center">
                          <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                            Dolor sit amet consectetur adipiscing elit
                          </a>
                        </h5>
                        <div className="cl8 txt-center p-b-17">
                          <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                            Celebrity
                          </a>
                          <span className="f1-s-3 m-rl-3">
                            -
                          </span>
                          <span className="f1-s-3">
                            Feb 18
                          </span>
                        </div>
                        <p className="f1-s-11 cl6 txt-center p-b-16">
                          Curabitur volutpat bibendum molestie. Vestibulum ornare gravida semper. Aliquam a dui suscipit, fringilla metus id, maximus leo.
                        </p>
                        <a href="blog-detail-01.html" className="f1-s-1 cl9 hov-cl10 trans-03">
                          Read More
                          <i className="m-l-2 fa fa-long-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                    {/* Item */}
                    <div className="p-b-53">
                      <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                        <img src={entertaiment20} alt="IMG" />
                      </a>
                      <div className="flex-col-s-c p-t-16">
                        <h5 className="p-b-5 txt-center">
                          <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                            Leo enim interdum nisl non mollis lacus est nec 
                          </a>
                        </h5>
                        <div className="cl8 txt-center p-b-17">
                          <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                            Celebrity
                          </a>
                          <span className="f1-s-3 m-rl-3">
                            -
                          </span>
                          <span className="f1-s-3">
                            Feb 18
                          </span>
                        </div>
                        <p className="f1-s-11 cl6 txt-center p-b-16">
                          Curabitur volutpat bibendum molestie. Vestibulum ornare gravida semper. Aliquam a dui suscipit, fringilla metus id, maximus leo.
                        </p>
                        <a href="blog-detail-01.html" className="f1-s-1 cl9 hov-cl10 trans-03">
                          Read More
                          <i className="m-l-2 fa fa-long-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                    {/* Item */}
                    <div className="p-b-53">
                      <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                        <img src={entertaiment21} alt="IMG" />
                      </a>
                      <div className="flex-col-s-c p-t-16">
                        <h5 className="p-b-5 txt-center">
                          <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                            Vestibulum justo nunc pulvinar nec mi eget
                          </a>
                        </h5>
                        <div className="cl8 txt-center p-b-17">
                          <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                            Celebrity
                          </a>
                          <span className="f1-s-3 m-rl-3">
                            -
                          </span>
                          <span className="f1-s-3">
                            Feb 18
                          </span>
                        </div>
                        <p className="f1-s-11 cl6 txt-center p-b-16">
                          Curabitur volutpat bibendum molestie. Vestibulum ornare gravida semper. Aliquam a dui suscipit, fringilla metus id, maximus leo.
                        </p>
                        <a href="blog-detail-01.html" className="f1-s-1 cl9 hov-cl10 trans-03">
                          Read More
                          <i className="m-l-2 fa fa-long-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Pagination */}
                <div className="flex-wr-c-c m-rl--7 p-t-28">
                  <a href="#" className="flex-c-c pagi-item hov-btn1 trans-03 m-all-7 pagi-active">1</a>
                  <a href="#" className="flex-c-c pagi-item hov-btn1 trans-03 m-all-7">2</a>
                </div>
              </div>
              <div className="col-md-10 col-lg-4 p-b-80">
                <div className="p-l-10 p-rl-0-sr991">
                  {/* Banner */}
                  <div className="flex-c-s">
                    <a href="#">
                      <img className="max-w-full" src={Banner2} alt="IMG" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer>
          <div className="bg2 p-t-40 p-b-25">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 p-b-20">
                  <div className="size-h-3 flex-s-c">
                    <a href="index.html">
                      <img className="max-s-full" src={Logo2} alt="LOGO" />
                    </a>
                  </div>
                  <div>
                    <p className="f1-s-1 cl11 p-b-16">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor magna eget elit efficitur, at accumsan sem placerat. Nulla tellus libero, mattis nec molestie at, facilisis ut turpis. Vestibulum dolor metus, tincidunt eget odio
                    </p>
                    <p className="f1-s-1 cl11 p-b-16">
                      Any questions? Call us on (+1) 96 716 6879
                    </p>
                    <div className="p-t-15">
                      <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                        <span className="fab fa-facebook-f" />
                      </a>
                      <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                        <span className="fab fa-twitter" />
                      </a>
                      <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                        <span className="fab fa-pinterest-p" />
                      </a>
                      <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                        <span className="fab fa-vimeo-v" />
                      </a>
                      <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                        <span className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 p-b-20">
                  <div className="size-h-3 flex-s-c">
                    <h5 className="f1-m-7 cl0">
                      Popular Posts
                    </h5>
                  </div>
                  <ul>
                    <li className="flex-wr-sb-s p-b-20">
                      <a href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
                        <img src={popularpost01} alt="IMG" />
                      </a>
                      <div className="size-w-5">
                        <h6 className="p-b-5">
                          <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03">
                            Donec metus orci, malesuada et lectus vitae
                          </a>
                        </h6>
                        <span className="f1-s-3 cl6">
                          Feb 17
                        </span>
                      </div>
                    </li>
                    <li className="flex-wr-sb-s p-b-20">
                      <a href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
                        <img src={popularpost02} alt="IMG" />
                      </a>
                      <div className="size-w-5">
                        <h6 className="p-b-5">
                          <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03">
                            Lorem ipsum dolor sit amet, consectetur
                          </a>
                        </h6>
                        <span className="f1-s-3 cl6">
                          Feb 16
                        </span>
                      </div>
                    </li>
                    <li className="flex-wr-sb-s p-b-20">
                      <a href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
                        <img src={popularpost03} alt="IMG" />
                      </a>
                      <div className="size-w-5">
                        <h6 className="p-b-5">
                          <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03">
                            Suspendisse dictum enim quis imperdiet auctor
                          </a>
                        </h6>
                        <span className="f1-s-3 cl6">
                          Feb 15
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-lg-4 p-b-20">
                  <div className="size-h-3 flex-s-c">
                    <h5 className="f1-m-7 cl0">
                      Category
                    </h5>
                  </div>
                  <ul className="m-t--12">
                    <li className="how-bor1 p-rl-5 p-tb-10">
                      <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                        Fashion (22)
                      </a>
                    </li>
                    <li className="how-bor1 p-rl-5 p-tb-10">
                      <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                        Technology (29)
                      </a>
                    </li>
                    <li className="how-bor1 p-rl-5 p-tb-10">
                      <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                        Street Style (15)
                      </a>
                    </li>
                    <li className="how-bor1 p-rl-5 p-tb-10">
                      <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                        Life Style (28)
                      </a>
                    </li>
                    <li className="how-bor1 p-rl-5 p-tb-10">
                      <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                        DIY &amp; Crafts (16)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg11">
            <div className="container size-h-4 flex-c-c p-tb-15">
              <span className="f1-s-1 cl0 txt-center">
                Copyright © 2018 
                <a href="#" className="f1-s-1 cl10 hov-link1">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by </a><a href="https://colorlib.com" target="_blank">Colorlib</a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </span>
            </div>
          </div>
        </footer>
        {/* Back to top */}
        <div className="btn-back-to-top" id="myBtn">
          <span className="symbol-btn-back-to-top">
            <span className="fas fa-angle-up" />
          </span>
        </div>
        {/*===============================================================================================*/}	
        {/*===============================================================================================*/}
        {/*===============================================================================================*/}
        {/*===============================================================================================*/}
      </div>
        )
    }
}
export default CategoryPage;