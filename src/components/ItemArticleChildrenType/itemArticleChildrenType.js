import { Link } from "react-router-dom";

const ItemArticleChildrenType = (props) => {
  return (
    <div className="flex-wr-sb-s m-b-30">
      <Link
        to={{ pathname: `/article-detail`, state: props.data }}
        className="size-w-1 wrap-pic-w hov1 trans-03"
      >
        <img src={props.data.thumbnail} alt={props.data.alt_thumbnail} />
      </Link>
      <div className="size-w-2">
        <h5 className="p-b-5">
          <Link
            to={{ pathname: `/article-detail`, state: props.data }}
            className="f1-s-5 cl3 hov-cl10 trans-03"
          >
            {props.data.title}
          </Link>
        </h5>
        <span className="cl8">
          <a href="/category" className="f1-s-6 cl8 hov-cl10 trans-03">
            {props.data.category}
          </a>
          <span className="f1-s-3 m-rl-3">-</span>
          <span className="f1-s-3">{props.data.creatByDate}</span>
        </span>
      </div>
    </div>
  );
};
export default ItemArticleChildrenType;
