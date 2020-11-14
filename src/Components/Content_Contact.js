import React from 'react'
import Post5 from '../assets/images/popular-post-05.jpg'
import Post4 from '../assets/images/popular-post-04.jpg'
import Post6 from '../assets/images/popular-post-06.jpg'

const Content_Contact = function(props){
    return (
      <section className="bg0 p-b-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-8 p-b-80">
            <div className="p-r-10 p-r-0-sr991">
              <form>
                <input className="bo-1-rad-3 bocl13 size-a-19 f1-s-13 cl5 plh6 p-rl-18 m-b-20" type="text" name="name" placeholder="Name*" />
                <input className="bo-1-rad-3 bocl13 size-a-19 f1-s-13 cl5 plh6 p-rl-18 m-b-20" type="text" name="email" placeholder="Email*" />
                <input className="bo-1-rad-3 bocl13 size-a-19 f1-s-13 cl5 plh6 p-rl-18 m-b-20" type="text" name="website" placeholder="Website" />
                <textarea className="bo-1-rad-3 bocl13 size-a-15 f1-s-13 cl5 plh6 p-rl-18 p-tb-14 m-b-20" name="msg" placeholder="Your Message" defaultValue={""} />
                <button className="size-a-20 bg2 borad-3 f1-s-12 cl0 hov-btn1 trans-03 p-rl-15 m-t-20">
                  Send
                </button>
              </form>
            </div>
          </div>
          {/* Sidebar */}
          <div className="col-md-5 col-lg-4 p-b-80">
            <div className="p-l-10 p-rl-0-sr991">
              {/* Popular Posts */}
              <div>
                <div className="how2 how2-cl4 flex-s-c">
                  <h3 className="f1-m-2 cl3 tab01-title">
                    Popular Post
                  </h3>
                </div>
                <ul className="p-t-35">
                  <li className="flex-wr-sb-s p-b-30">
                    <a href="#" className="size-w-10 wrap-pic-w hov1 trans-03">
                      <img src={Post4} alt="IMG" />
                    </a>
                    <div className="size-w-11">
                      <h6 className="p-b-4">
                        <a href="blog-detail-02.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                          Donec metus orci, malesuada et lectus vitae
                        </a>
                      </h6>
                      <span className="cl8 txt-center p-b-24">
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
                  </li>
                  <li className="flex-wr-sb-s p-b-30">
                    <a href="#" className="size-w-10 wrap-pic-w hov1 trans-03">
                      <img src={Post5} alt="IMG" />
                    </a>
                    <div className="size-w-11">
                      <h6 className="p-b-4">
                        <a href="blog-detail-02.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                          Donec metus orci, malesuada et lectus vitae
                        </a>
                      </h6>
                      <span className="cl8 txt-center p-b-24">
                        <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                          Game
                        </a>
                        <span className="f1-s-3 m-rl-3">
                          -
                        </span>
                        <span className="f1-s-3">
                          Feb 16
                        </span>
                      </span>
                    </div>
                  </li>
                  <li className="flex-wr-sb-s p-b-30">
                    <a href="#" className="size-w-10 wrap-pic-w hov1 trans-03">
                      <img src={Post6} alt="IMG" />
                    </a>
                    <div className="size-w-11">
                      <h6 className="p-b-4">
                        <a href="blog-detail-02.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                          Donec metus orci, malesuada et lectus vitae
                        </a>
                      </h6>
                      <span className="cl8 txt-center p-b-24">
                        <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                          Celebrity
                        </a>
                        <span className="f1-s-3 m-rl-3">
                          -
                        </span>
                        <span className="f1-s-3">
                          Feb 12
                        </span>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}
export default Content_Contact;