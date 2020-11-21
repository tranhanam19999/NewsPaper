import React, {Component} from 'react';
import Header from '../../Components/Layout/header'
import Footer from '../../Components/Layout/footer'
import Tag from '../../Components/Tag/tag';
import PopularPosts from '../../Components/PopularPosts/popularposts';
import Search from '../../Components/Search/search';
import Breadcumb from '../../Components/Breadcumb/breadcumb';

class ProductDetail extends Component { 
    render() {
        return (
            <div>
              <Header/>
        {/* Breadcrumb */}
        <Breadcumb label = "Blog" label1 = "Nulla non interdum metus non laoreet nisi tellus eget aliquam lorem pellentesque"/>
        {/* Content */}
        <section className="bg0 p-b-140 p-t-10">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8 p-b-30">
                <div className="p-r-10 p-r-0-sr991">
                  {/* Blog Detail */}
                  <div className="p-b-70">
                    <a href="#" className="f1-s-10 cl2 hov-cl10 trans-03 text-uppercase">
                      Technology
                    </a>
                    <h3 className="f1-l-3 cl2 p-b-16 p-t-33 respon2">
                      Nulla non interdum metus non laoreet nisi tellus eget aliquam lorem pellentesque
                    </h3>
                    <div className="flex-wr-s-s p-b-40">
                      <span className="f1-s-3 cl8 m-r-15">
                        <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                          by John Alvarado
                        </a>
                        <span className="m-rl-3">-</span>
                        <span>
                          Feb 18
                        </span>
                      </span>
                      <span className="f1-s-3 cl8 m-r-15">
                        5239 Views
                      </span>
                      <a href="#" className="f1-s-3 cl8 hov-cl10 trans-03 m-r-15">
                        0 Comment
                      </a>
                    </div>
                    <div className="wrap-pic-max-w p-b-30">
                      <img src="images/blog-list-01.jpg" alt="IMG" />
                    </div>
                    <p className="f1-s-11 cl6 p-b-25">
                      Curabitur volutpat bibendum molestie. Vestibulum ornare gravida semper. Aliquam a dui suscipit, fringilla metus id, maximus leo. Vivamus sapien arcu, mollis eu pharetra vitae, condimentum in orci. Integer eu sodales dolor. Maecenas elementum arcu eu convallis rhoncus. Donec tortor sapien, euismod a faucibus eget, porttitor quis libero. 
                    </p>
                    <p className="f1-s-11 cl6 p-b-25">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet est vel orci luctus sollicitudin. Duis eleifend vestibulum justo, varius semper lacus condimentum dictum. Donec pulvinar a magna ut malesuada. In posuere felis diam, vel sodales metus accumsan in. Duis viverra dui eu pharetra pellentesque. Donec a eros leo. Quisque sed ligula vitae lorem efficitur faucibus. Praesent sit amet imperdiet ante. Nulla id tellus auctor, dictum libero a, malesuada nisi. Nulla in porta nibh, id vestibulum ipsum. Praesent dapibus tempus erat quis aliquet. Donec ac purus id sapien condimentum feugiat.
                    </p>
                    <p className="f1-s-11 cl6 p-b-25">
                      Praesent vel mi bibendum, finibus leo ac, condimentum arcu. Pellentesque sem ex, tristique sit amet suscipit in, mattis imperdiet enim. Integer tempus justo nec velit fringilla, eget eleifend neque blandit. Sed tempor magna sed congue auctor. Mauris eu turpis eget tortor ultricies elementum. Phasellus vel placerat orci, a venenatis justo. Phasellus faucibus venenatis nisl vitae vestibulum. Praesent id nibh arcu. Vivamus sagittis accumsan felis, quis vulputate
                    </p>
                    {/* Tag */}
                    <div className="flex-s-s p-t-12 p-b-15">
                      <span className="f1-s-12 cl5 m-r-8">
                        Tags:
                      </span>
                      <div className="flex-wr-s-s size-w-0">
                        <a href="#" className="f1-s-12 cl8 hov-link1 m-r-15">
                          Streetstyle
                        </a>
                        <a href="#" className="f1-s-12 cl8 hov-link1 m-r-15">
                          Crafts
                        </a>
                      </div>
                    </div>
                    {/* Share */}
                    <div className="flex-s-s">
                      <span className="f1-s-12 cl5 p-t-1 m-r-15">
                        Share:
                      </span>
                      <div className="flex-wr-s-s size-w-0">
                        <a href="#" className="dis-block f1-s-13 cl0 bg-facebook borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
                          <i className="fab fa-facebook-f m-r-7" />
                          Facebook
                        </a>
                        <a href="#" className="dis-block f1-s-13 cl0 bg-twitter borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
                          <i className="fab fa-twitter m-r-7" />
                          Twitter
                        </a>
                        <a href="#" className="dis-block f1-s-13 cl0 bg-google borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
                          <i className="fab fa-google-plus-g m-r-7" />
                          Google+
                        </a>
                        <a href="#" className="dis-block f1-s-13 cl0 bg-pinterest borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
                          <i className="fab fa-pinterest-p m-r-7" />
                          Pinterest
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Leave a comment */}
                  <div>
                    <h4 className="f1-l-4 cl3 p-b-12">
                      Leave a Comment
                    </h4>
                    <p className="f1-s-13 cl8 p-b-40">
                      Your email address will not be published. Required fields are marked *
                    </p>
                    <form>
                      <textarea className="bo-1-rad-3 bocl13 size-a-15 f1-s-13 cl5 plh6 p-rl-18 p-tb-14 m-b-20" name="msg" placeholder="Comment..." defaultValue={""} />
                      <input className="bo-1-rad-3 bocl13 size-a-16 f1-s-13 cl5 plh6 p-rl-18 m-b-20" type="text" name="name" placeholder="Name*" />
                      <input className="bo-1-rad-3 bocl13 size-a-16 f1-s-13 cl5 plh6 p-rl-18 m-b-20" type="text" name="email" placeholder="Email*" />
                      <input className="bo-1-rad-3 bocl13 size-a-16 f1-s-13 cl5 plh6 p-rl-18 m-b-20" type="text" name="website" placeholder="Website" />
                      <button className="size-a-17 bg2 borad-3 f1-s-12 cl0 hov-btn1 trans-03 p-rl-15 m-t-10">
                        Post Comment
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* Sidebar */}
              <div className="col-md-10 col-lg-4 p-b-30">
                <div className="p-l-10 p-rl-0-sr991 p-t-70">						
                  {/* Category */}
                  <div className="p-b-60">
                    <div className="how2 how2-cl4 flex-s-c">
                      <h3 className="f1-m-2 cl3 tab01-title">
                        Category
                      </h3>
                    </div>
                    <ul className="p-t-35">
                      <li className="how-bor3 p-rl-4">
                        <a href="#" className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                          Fashion
                        </a>
                      </li>
                      <li className="how-bor3 p-rl-4">
                        <a href="#" className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                          Beauty
                        </a>
                      </li>
                      <li className="how-bor3 p-rl-4">
                        <a href="#" className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                          Street Style
                        </a>
                      </li>
                      <li className="how-bor3 p-rl-4">
                        <a href="#" className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                          Life Style
                        </a>
                      </li>
                      <li className="how-bor3 p-rl-4">
                        <a href="#" className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                          DIY &amp; Crafts
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Archive */}
                  <div className="p-b-37">
                    <div className="how2 how2-cl4 flex-s-c">
                      <h3 className="f1-m-2 cl3 tab01-title">
                        Archive
                      </h3>
                    </div>
                    <ul className="p-t-32">
                      <li className="p-rl-4 p-b-19">
                        <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                          <span>
                            July 2018
                          </span>
                          <span>
                            (9)
                          </span>
                        </a>
                      </li>
                      <li className="p-rl-4 p-b-19">
                        <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                          <span>
                            June 2018
                          </span>
                          <span>
                            (39)
                          </span>
                        </a>
                      </li>
                      <li className="p-rl-4 p-b-19">
                        <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                          <span>
                            May 2018
                          </span>
                          <span>
                            (29)
                          </span>
                        </a>
                      </li>
                      <li className="p-rl-4 p-b-19">
                        <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                          <span>
                            April  2018
                          </span>
                          <span>
                            (35)
                          </span>
                        </a>
                      </li>
                      <li className="p-rl-4 p-b-19">
                        <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                          <span>
                            March 2018
                          </span>
                          <span>
                            (22)
                          </span>
                        </a>
                      </li>
                      <li className="p-rl-4 p-b-19">
                        <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                          <span>
                            February 2018
                          </span>
                          <span>
                            (32)
                          </span>
                        </a>
                      </li>
                      <li className="p-rl-4 p-b-19">
                        <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                          <span>
                            January 2018
                          </span>
                          <span>
                            (21)
                          </span>
                        </a>
                      </li>
                      <li className="p-rl-4 p-b-19">
                        <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                          <span>
                            December 2017
                          </span>
                          <span>
                            (26)
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Popular Posts */}
                  <PopularPosts/>
                  {/* Tag */}
                  <Tag/>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
              <Footer/>
            </div>
        );
    }
}
export default ProductDetail;