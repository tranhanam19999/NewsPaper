import React, {Component} from 'react';
import Header_b from '../Components/Header'
import Breadcrumb_b from '../Components/Breadcrumb'
import page_he_b from '../Components/Page-heading'
import Content_About_b from '../Components/Content_Contact'
import Footer_b from '../Components/Footer'
import Back_top_b from '../Components/Back_top' 

class About extends Component { 
    render() {
        return (
            <div>
              <Header_b/>
              <Breadcrumb_b/>
              <page_he_b/>
              <Content_About_b/>
              <Footer_b/>
              <Back_top_b/>
            </div>
        );
    }
}
export default About;