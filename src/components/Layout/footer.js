import React, {useEffect} from 'react'
import {loadScripts} from '../../_utils/'
const Footer = props => {
  useEffect(() => {
    document.onload = loadScripts()
  })

    return(
        <div>
        <footer>
          <div className="bg2 p-t-40 p-b-25">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 p-b-20">
                  <div className="size-h-3 flex-s-c">
                    <a href="index.html">
                      <img className="max-s-full" src="images/icons/logo-02.png" alt="LOGO" />
                    </a>
                  </div>
                  <div>
                    <p className="f1-s-1 cl11 p-b-16">
                      Chúng tôi cố gắng cung cấp nhiều thông tin nhất có thể cho bạn thông qua các tin tức được cập nhập thường xuyên trên nhiều lĩnh vực khác nhau nhằm giúp bạn bắt kịp xu hướng hiện nay...
                    </p>
                    <p className="f1-s-1 cl11 p-b-16">
                      Mọi câu hỏi thắc mắc có thể gọi cho chúng tôi qua: (+1) 96 716 6879
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
                      Bài Viết Phổ Biến
                    </h5>
                  </div>
                  <ul>
                    <li className="flex-wr-sb-s p-b-20">
                      <a href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
                        <img src="images/popular-post-01.jpg" alt="IMG" />
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
                        <img src="images/popular-post-02.jpg" alt="IMG" />
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
                        <img src="images/popular-post-03.jpg" alt="IMG" />
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
                      Thể Loại
                    </h5>
                  </div>
                  <ul className="m-t--12">
                    <li className="how-bor1 p-rl-5 p-tb-10">
                      <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                        Thời Trang (22)
                      </a>
                    </li>
                    <li className="how-bor1 p-rl-5 p-tb-10">
                      <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                        Công Nghệ (29)
                      </a>
                    </li>
                    <li className="how-bor1 p-rl-5 p-tb-10">
                      <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                        Phong Cách Đường Phố (15)
                      </a>
                    </li>
                    <li className="how-bor1 p-rl-5 p-tb-10">
                      <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                        Cách Sống (28)
                      </a>
                    </li>
                    <li className="how-bor1 p-rl-5 p-tb-10">
                      <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                        DIY &amp; Đồ Thủ Công (16)
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
                © 2018 
                <a href="#" className="f1-s-1 cl10 hov-link1"> 
                  © MAGNEWS | Trang web tin tức <i className="fa fa-heart" aria-hidden="true" /></a> <a href="https://colorlib.com" target="_blank">MAGNEWS</a>
              </span>
            </div>
          </div>
        </footer>
        
        <div className={"btn-back-to-top"} id="myBtn">
          <span className="symbol-btn-back-to-top">
            <span className="fas fa-angle-up" />
          </span>
        </div>
         </div>
    )
}

export default Footer