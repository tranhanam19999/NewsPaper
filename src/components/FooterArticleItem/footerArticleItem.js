const FooterArticleItem = (props) => {
  return (
    <li className="flex-wr-sb-s p-b-20">
      <a href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
        <img src="images/popular-post-01.jpg" alt="IMG" />
      </a>
      <div className="size-w-5">
        <h6 className="p-b-5">
          <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03">
            {prosp.article.title}
          </a>
        </h6>
        <span className="f1-s-3 cl6">{props.article.createByDate}</span>
      </div>
    </li>
  );
};
export default FooterArticleItem
