import React, { Component } from 'react'


class Back_top extends Component{
    render(){
        return(
            <div className="btn-back-to-top" id="myBtn">
            <span className="symbol-btn-back-to-top">
            <span className="fas fa-angle-up" />
            </span>
            </div>
        );
    }
}
export default Back_top;