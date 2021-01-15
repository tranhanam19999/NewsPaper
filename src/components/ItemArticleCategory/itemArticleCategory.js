import { Link } from "react-router-dom";

const ItemArticleCategory = (props) => {
  return (
    <div className="p-b-53">
      <Link
        to={{ pathname: `/article-detail`, state: props.data }}
        className="wrap-pic-w hov1 trans-03"
      >
        <img src={props.data.thumbnail} alt="" />
      </Link>
      <div className="flex-col-s-c p-t-16">
        <h5 className="p-b-5 txt-center">
          <Link
            to={{ pathname: `/article-detail`, state: props.data }}
            className="f1-m-3 cl2 hov-cl10 trans-03"
          >
            {props.data.title}
          </Link>
        </h5>
        <div className="cl8 txt-center p-b-17">
          <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
            Celebrity
          </a>
          <span className="f1-s-3 m-rl-3">-</span>
          <span className="f1-s-3">{props.data.createByDate}</span>
        </div>
        <p className="f1-s-11 cl6 txt-center p-b-16">{props.data.content}</p>
        <a href="blog-detail-01.html" className="f1-s-1 cl9 hov-cl10 trans-03">
          Read More
          <i className="m-l-2 fa fa-long-arrow-alt-right" />
        </a>
      </div>
    </div>
  );
};
export default ItemArticleCategory;
