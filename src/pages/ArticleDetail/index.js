import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcomment, addcomment } from "../../store/comment";
import { getArticel, getArticelId } from "../../store/article";

import Header from "../../components/Layout/header";
import Footer from "../../components/Layout/footer";
import Tag from "../../components/Tag/tag";
import PopularPosts from "../../components/PopularPosts/popularposts";
import Breadcumb from "../../components/Breadcumb/breadcumb";
// import { getArticelId } from "../../store/article";

const ArticleDetail = (props) => {

  const dispatch = useDispatch();
  const user = localStorage.getItem('user') ;
  const comment = useSelector((state) => state.comment);
  const articles = useSelector((state) => state.article);
  
  let data = props.location.state;

  useEffect(() => {
    async function fetch(){
      dispatch(getcomment(data._id));
      // dispatch(getArticel());
      


    }
    fetch();
  }, []);

  

  console.log(comment, 'comment')

  const [cmt, setCmt] = useState("");
  const postComment = () => {
    // dispatch(addcomment(user._id,data._id,cmt));
    // dispatch(getArticelId(data._id));
  };

  if (comment.lenght < 0) {
    return(<div></div>)
  }

  return (
    <div>
      <Header />
      <Breadcumb
        label="Blog"
        label1="Nulla non interdum metus non laoreet nisi tellus eget aliquam lorem pellentesque"
      />

      <section className="bg0 p-b-140 p-t-10">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 p-b-30">
              <div className="p-r-10 p-r-0-sr991">
                <div className="p-b-70">
                  <a
                    href="#"
                    className="f1-s-10 cl2 hov-cl10 trans-03 text-uppercase"
                  >
                    Technology
                  </a>
                  <h3 className="f1-l-3 cl2 p-b-16 p-t-33 respon2">
                    {articles ? articles.title : data.title}
                  </h3>
                  <div className="flex-wr-s-s p-b-40">
                    <span className="f1-s-3 cl8 m-r-15">
                      {/* <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                        by John Alvarado
                      </a> */}
                      {/* <span className="m-rl-3">-</span> */}
                      <span>{articles ? articles.createByDate : data.createByDate}</span>
                    </span>
                    <span className="f1-s-3 cl8 m-r-15">5239 Views</span>
                    <a href="#" className="f1-s-3 cl8 hov-cl10 trans-03 m-r-15">
                      0 Comment
                    </a>
                  </div>
                  <div className="wrap-pic-max-w p-b-30">
                    <img src={articles ? articles.thumbnail : data.thumbnail} alt="" />
                  </div>
                  <p className="f1-s-11 cl6 p-b-25">{data.content}</p>

                  <div className="flex-s-s">
                    <span className="f1-s-12 cl5 p-t-1 m-r-15">Share:</span>
                    <div className="flex-wr-s-s size-w-0">
                      <a
                        href="#"
                        className="dis-block f1-s-13 cl0 bg-facebook borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03"
                      >
                        <i className="fab fa-facebook-f m-r-7" />
                        Facebook
                      </a>
                      <a
                        href="#"
                        className="dis-block f1-s-13 cl0 bg-twitter borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03"
                      >
                        <i className="fab fa-twitter m-r-7" />
                        Twitter
                      </a>
                      <a
                        href="#"
                        className="dis-block f1-s-13 cl0 bg-google borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03"
                      >
                        <i className="fab fa-google-plus-g m-r-7" />
                        Google+
                      </a>
                      <a
                        href="#"
                        className="dis-block f1-s-13 cl0 bg-pinterest borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03"
                      >
                        <i className="fab fa-pinterest-p m-r-7" />
                        Pinterest
                      </a>
                    </div>
                  </div>
                </div>
                {comment.length == 0 ? null  : comment.map((item, idx) => {
                  return (
                    <div className="flex-wr-sb-s m-b-30">
                      <div className="size-w-2">
                        <h5 className="p-b-5">
                          <p className="f1-s-5 cl3 hov-cl10 trans-03" style={{fontSize: 18}}>
                            {item.content}
                          </p>
                        </h5>
                        <span className="cl8">
                          <span className="f1-s-3">{item.createByDate}</span>
                        </span>
                      </div>
                    </div>
                  );
                })}

                <div>
                  <h4 className="f1-l-4 cl3 p-b-12">Leave a Comment</h4>
                  <p className="f1-s-13 cl8 p-b-40">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <form>
                    <textarea
                      className="bo-1-rad-3 bocl13 size-a-15 f1-s-13 cl5 plh6 p-rl-18 p-tb-14 m-b-20"
                      name="msg"
                      placeholder="Comment..."
                      defaultValue={""}
                      onChange={(e) => setCmt(e.target.value)}
                    />

                    <button
                      className="size-a-17 bg2 borad-3 f1-s-12 cl0 hov-btn1 trans-03 p-rl-15 m-t-10"
                      onClick={postComment()}
                    >
                      Post Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-10 col-lg-4 p-b-30">
              <div className="p-l-10 p-rl-0-sr991 p-t-70">
                {/* <PopularPosts data={articles} /> */}
                <Tag />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default ArticleDetail;
