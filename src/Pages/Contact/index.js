import React, {Component} from 'react';
import Header from '../../Components/Layout/header'
import Footer from '../../Components/Layout/footer'
import Search from '../../Components/Search/search'
import PopularPosts from '../../Components/PopularPosts/popularposts';
import Breadcumb from '../../Components/Breadcumb/breadcumb';

class Contact extends Component { 
    render() {
        return (
            <div className="animsition">
        <Header/>
        {/* Breadcrumb */}
        <Breadcumb label1 = "Contact Us"/>
        {/* Page heading */}
        <div className="container p-t-4 p-b-40">
          <h2 className="f1-l-1 cl2">
            Contact Us
          </h2>
        </div>
        {/* Content */}
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
                  <PopularPosts/>
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
export default Contact;