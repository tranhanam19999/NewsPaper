import React, {Component} from 'react';
import Header_c from '../Components/Header'
import Breadcrumb_c from '../Components/Breadcrumb'
import page_he_c from '../Components/Page-heading'
import Content_Contact_c from '../Components/Content'
import Footer_c from '../Components/Footer'
import Back_top_c from '../Components/Back_top' 

class Contact extends Component { 
    render() {
        return (
            <div>
              <Header_c/>
              <Breadcrumb_c/>
              <page_he_c/>
              <Content_Contact_c/>
              <Footer_c/>
              <Back_top_c/>
            </div>
        );
    }
}
export default Contact;