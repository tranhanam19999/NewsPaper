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
                   {/* {props.article.map((item,idx) => {
                     if(idx > 0 && idx < 4){
                       return(
                         <FooterArticleItem article={item}/>
                       )
                     }
                   })} */}
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
                        News
                      </a>
                    </li>
                    <li className="how-bor1 p-rl-5 p-tb-10">
                      <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                        Entertaiment
                      </a>
                    </li>
                    <li className="how-bor1 p-rl-5 p-tb-10">
                      <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                        Business
                      </a>
                    </li>
                    <li className="how-bor1 p-rl-5 p-tb-10">
                      <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                        Travel
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
                <a href="#" className="f1-s-1 cl10 hov-link1">
                  Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by </a><a href="https://colorlib.com" target="_blank">Colorlib</a>
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