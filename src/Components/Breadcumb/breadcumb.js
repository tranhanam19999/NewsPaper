import { Switch } from 'react-router-dom';
import Search from '../Search/search'
const Breadcumb = props => {
    // if(props.typeItem == "about")
    // {
    //   return(
    //     <div className="container">
    //       <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
    //         <div className="f2-s-1 p-r-30 m-tb-6">
    //           <a href="index.html" className="breadcrumb-item f1-s-3 cl9">
    //             Home
    //           </a>
    //           <span className="breadcrumb-item f1-s-3 cl9">
    //             About Us
    //           </span>
    //         </div>
    //         <Search />
    //       </div>
    //     </div>
    //   )
    // }
    // if(props.typeItem == "contact")
    // {
    //   return(
    //     <div className="container">
    //       <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
    //         <div className="f2-s-1 p-r-30 m-tb-6">
    //           <a href="index.html" className="breadcrumb-item f1-s-3 cl9">
    //             Home
    //           </a>
    //           <span className="breadcrumb-item f1-s-3 cl9">
    //             Contact Us
    //           </span>
    //         </div>
    //         <Search />
    //       </div>
    //     </div>
    //   )
    // }
    // if(props.typeItem == "product")
    // {
    //   return(
    //     <div className="container">
    //       <div className="headline bg0 flex-wr-sb-c p-rl-20 p-tb-8">
    //         <div className="f2-s-1 p-r-30 m-tb-6">
    //           <a href="index.html" className="breadcrumb-item f1-s-3 cl9">
    //             Home 
    //           </a>
    //           <a href="blog-list-01.html" className="breadcrumb-item f1-s-3 cl9">
    //             Blog 
    //           </a>
    //           <span className="breadcrumb-item f1-s-3 cl9">
    //             Nulla non interdum metus non laoreet nisi tellus eget aliquam lorem pellentesque
    //           </span>
    //         </div>
    //         <Search/>
    //       </div>
    //     </div>
    //   )
    // }
    return(
        <div className="container">
          <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
            <div className="f2-s-1 p-r-30 m-tb-6">
              <a href="index.html" className={props.label ? "breadcrumb-item f1-s-3 cl9 bonus":"f1-s-3 cl9"}>
                Home
              </a>
              <a href="category-01.html" className="breadcrumb-item f1-s-3 cl9 bonus">
              {props.label}
              </a>
              <span className="breadcrumb-item f1-s-3 cl9">
              {props.label1}
              </span>
            </div>
            <Search />
          </div>
        </div>
    )
}
export default Breadcumb;