import React from 'react'
import la from '../assets/images/icons/logo-02.png'
const Content = function(props) {

    return(        
      <section className="bg0 p-b-110">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-8 p-b-30">
            <div className="p-r-10 p-r-0-sr991">
              <p className="f1-s-11 cl6 p-b-25">
                Curabitur volutpat bibendum molestie. Vestibulum ornare gravida semper. Aliquam a dui suscipit, fringilla metus id, maximus leo. Vivamus sapien arcu, mollis eu pharetra vitae, condimentum in orci. Integer eu sodales dolor. Maecenas elementum arcu eu convallis rhoncus. Donec tortor sapien, euismod a faucibus eget, porttitor quis libero. 
              </p>
              <p className="f1-s-11 cl6 p-b-25">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet est vel orci luctus sollicitudin. Duis eleifend vestibulum justo, varius semper lacus condimentum dictum. Donec pulvinar a magna ut malesuada. In posuere felis diam, vel sodales metus accumsan in. Duis viverra dui eu pharetra pellentesque. Donec a eros leo. Quisque sed ligula vitae lorem efficitur faucibus. Praesent sit amet imperdiet ante. Nulla id tellus auctor, dictum libero a, malesuada nisi. Nulla in porta nibh, id vestibulum ipsum. Praesent dapibus tempus erat quis aliquet. Donec ac purus id sapien condimentum feugiat.
              </p>
              <p className="f1-s-11 cl6 p-b-25">
                Praesent vel mi bibendum, finibus leo ac, condimentum arcu. Pellentesque sem ex, tristique sit amet suscipit in, mattis imperdiet enim. Integer tempus justo nec velit fringilla, eget eleifend neque blandit. Sed tempor magna sed congue auctor. Mauris eu turpis eget tortor ultricies elementum. Phasellus vel placerat orci, a venenatis justo. Phasellus faucibus venenatis nisl vitae vestibulum. Praesent id nibh arcu. Vivamus sagittis accumsan felis, quis vulputate
              </p>
            </div>
          </div>
          {/* Sidebar */}
          <div className="col-md-5 col-lg-4 p-b-30">
            <div className="p-l-10 p-rl-0-sr991 p-t-5">
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
                      <img src={la} alt="IMG" />
                    </a>
                    <div className="size-w-11">
                      <h6 className="p-b-4">
                        <a href="#" className="f1-s-5 cl3 hov-cl10 trans-03">
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
                      <img src={la} alt="IMG" />
                    </a>
                    <div className="size-w-11">
                      <h6 className="p-b-4">
                        <a href="#" className="f1-s-5 cl3 hov-cl10 trans-03">
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
                      <img src={la} alt="IMG" />
                    </a>
                    <div className="size-w-11">
                      <h6 className="p-b-4">
                        <a href="#" className="f1-s-5 cl3 hov-cl10 trans-03">
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
    );
}
export default Content;