import React, {Component} from 'react';
import Header from '../../Components/Layout/header'
import Footer from '../../Components/Layout/footer'
import Search from '../../Components/Search/search';
import PopularPosts from '../../Components/PopularPosts/popularposts';
import Breadcumb from '../../Components/Breadcumb/breadcumb';

class About extends Component { 
    render() {
        return (
            <div className="animsition">
        <Header/>
        {/* Breadcrumb */}
        <Breadcumb label1 = "About Us"/>
        {/* Page heading */}
        <div className="container p-t-4 p-b-35">
          <h2 className="f1-l-1 cl2">
            About Us
          </h2>
        </div>
        {/* Content */}
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
export default About;