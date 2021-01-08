import { Link } from "react-router-dom";

const ItemAticleParentType = (props) => {
  return (
    <div className="m-b-30">
      <Link to={{ pathname: `/article-detail`, state: props.data }} className="wrap-pic-w hov1 trans-03">
        <img src={props.data.thumbnail} alt={props.data.alt_thumbnail} />
      </Link>
      <div className="p-t-20">
        <h5 className="p-b-5">
          <Link to={{ pathname: `/article-detail`, state: props.data }}>
            {props.data.title}
          </Link>
        </h5>
        <span className="cl8">
          <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
            {props.data.category}
          </a>
          <span className="f1-s-3 m-rl-3">-</span>
          <span className="f1-s-3">{props.data.createByDate}</span>
        </span>
      </div>
    </div>
  );
};
export default ItemAticleParentType;
