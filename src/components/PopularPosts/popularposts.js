import { Link } from "react-router-dom";

const PopularPosts = (props) => {
  return (
    <div className="p-b-30">
      <div className="how2 how2-cl4 flex-s-c">
        <h3 className="f1-m-2 cl3 tab01-title">Popular Post</h3>
      </div>
      <ul className="p-t-35">
        {props.data.map((item, idx) => {
          return (
            <li className="flex-wr-sb-s p-b-30">
              <Link
                to={{ pathname: `/article-detail`, state: props.data }}
                className="size-w-10 wrap-pic-w hov1 trans-03"
              >
                <img src={item.thumbnail} alt={item.alt_thumbnail} />
              </Link>
              <div className="size-w-11">
                <h6 className="p-b-4">
                  <Link
                    to={{ pathname: `/article-detail`, state: props.data }}
                    className="f1-s-5 cl3 hov-cl10 trans-03"
                  >
                    {item.title}
                  </Link>
                </h6>
                <span className="cl8 txt-center p-b-24">
                  <Link
                    to={{ pathname: `/category`, state: props.data }}
                    className="f1-s-6 cl8 hov-cl10 trans-03"
                  >
                    {item.category}
                  </Link>
                  <span className="f1-s-3 m-rl-3">-</span>
                  <span className="f1-s-3">{item.createByDate}</span>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default PopularPosts;
