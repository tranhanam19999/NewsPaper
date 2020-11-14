import React, {Component} from 'react';
import Header from '../Components/Header'
import Breadcrumb from '../Components/Breadcrumb'
import page_he from '../Components/Page-heading'
import Content_P_Detail from '../Components/Content_P_Detail'
import Footer from '../Components/Footer'
import Back_top from '../Components/Back_top' 

class ProductDetail extends Component { 
    render() {
        return (
            <div>
              <Header/>
              <Breadcrumb/>
              <page_he/>
              <Content_P_Detail/>
              <Footer/>
              <Back_top/>
            </div>
        );
    }
}
export default ProductDetail;