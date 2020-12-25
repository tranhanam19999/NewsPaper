import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Search from '../Search/search'
const Breadcumb = props => {
    return(
        <div className="container">
          <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
            <div className="f2-s-1 p-r-30 m-tb-6">
              <Link to="/" className={props.label ? "breadcrumb-item f1-s-3 cl9 bonus":"f1-s-3 cl9"}>Home</Link>
              <Link to="/category" className="breadcrumb-item f1-s-3 cl9 bonus">{props.label}</Link>
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