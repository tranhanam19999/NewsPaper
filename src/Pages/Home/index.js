import React from "react";
import Header from "../../Components/Layout/header";
import Footer from "../../Components/Layout/footer";
import Search from "../../Components/Search/search";
import SubscribeEmail from "../../Components/SubscribeEmail/subscribeEmail";

import Video from "../../assets/images/video-01.jpg";
import Tag from "../../Components/Tag/tag";
import ItemBannerArticle from "../../Components/ItemBannerArticle/ItemBannerArticle";
import ItemAticleParentType from "../../Components/ItemAticleParentType/itemAticleParentType";
import ItemArticleChildrenType from "../../Components/ItemArticleChildrenType/itemArticleChildrenType";
import ArticleSecction from "../../Components/ArticleSecction/articleSecction";

class Home extends React.Component {
  render() {
    return (
      <div className="animsition">
        {/* Header */}
        <Header />
        <div className="container">
          <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
            <div className="f2-s-1 p-r-30 size-w-0 m-tb-6 flex-wr-s-c">
              <span className="text-uppercase cl2 p-r-8">Trending Now:</span>
              <span
                className="dis-inline-block cl6 slide100-txt pos-relative size-w-0"
                data-in="fadeInDown"
                data-out="fadeOutDown"
                style={{ width: "min-content" }}
              >
                <span className="dis-inline-block slide100-txt-item animated visible-false">
                  Interest rate angst trips up US equity bull market
                </span>
                <span className="dis-inline-block slide100-txt-item animated visible-false">
                  Designer fashion show kicks off Variety Week
                </span>
                <span className="dis-inline-block slide100-txt-item animated visible-false">
                  Microsoft quisque at ipsum vel orci eleifend ultrices
                </span>
              </span>
            </div>
            <Search />
          </div>
        </div>
        {/* Feature post */}
        <section className="bg0">
          <div className="container">
            <div className="row m-rl--1">
              <ItemBannerArticle />
              <div class="col-md-6 p-rl-1">
                <div class="row m-rl--1">
                  <ItemBannerArticle typeItem="second" />
                  <ItemBannerArticle typeItem="children" />
                  <ItemBannerArticle typeItem="children" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Post */}
        <section className="bg0 p-t-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8">
                <div className="p-b-20">
                  {/* Entertainment */}
                  <ArticleSecction label="Entertainment" label1 = "Celebrity" label2 = "Movies" label3 = "Music" label4 = "Games"/>
                  {/* Business */}
                  <ArticleSecction label="Business" label1 = "Finance" label2 = "Money & Markets" label3 = "Small Business"/>
                  {/* Travel */}
                  <ArticleSecction label="Travel" label1 = "Hotels" label2 = "Flight" label3 = "Beachs" label4 = "Culture"/>
                </div>
              </div>
              <div className="col-md-10 col-lg-4">
                <div className="p-l-10 p-rl-0-sr991 p-b-20">
                  <div>
                    <div className="how2 how2-cl4 flex-s-c">
                      <h3 className="f1-m-2 cl3 tab01-title">Most Popular</h3>
                    </div>
                    <ul className="p-t-35">
                      <li className="flex-wr-sb-s p-b-22">
                        <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                          1
                        </div>
                        <a
                          href="#"
                          className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </a>
                      </li>
                      <li className="flex-wr-sb-s p-b-22">
                        <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                          2
                        </div>
                        <a
                          href="#"
                          className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03"
                        >
                          Proin velit consectetur non neque
                        </a>
                      </li>
                      <li className="flex-wr-sb-s p-b-22">
                        <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                          3
                        </div>
                        <a
                          href="#"
                          className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03"
                        >
                          Nunc vestibulum, enim vitae condimentum volutpat
                          lobortis ante
                        </a>
                      </li>
                      <li className="flex-wr-sb-s p-b-22">
                        <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                          4
                        </div>
                        <a
                          href="#"
                          className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03"
                        >
                          Proin velit justo consectetur non neque elementum
                        </a>
                      </li>
                      <li className="flex-wr-sb-s p-b-22">
                        <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0">
                          5
                        </div>
                        <a
                          href="#"
                          className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03"
                        >
                          Proin velit consectetur non neque
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-c-s p-t-8">
                    <a href="#">
                      <img
                        className="max-w-full"
                        src="images/banner-02.jpg"
                        alt="IMG"
                      />
                    </a>
                  </div>
                  <div className="p-t-50">
                    <div className="how2 how2-cl4 flex-s-c">
                      <h3 className="f1-m-2 cl3 tab01-title">Stay Connected</h3>
                    </div>
                    <ul className="p-t-35">
                      <li className="flex-wr-sb-c p-b-20">
                        <a
                          href="#"
                          className="size-a-8 flex-c-c borad-3 size-a-8 bg-facebook fs-16 cl0 hov-cl0"
                        >
                          <span className="fab fa-facebook-f" />
                        </a>
                        <div className="size-w-3 flex-wr-sb-c">
                          <span className="f1-s-8 cl3 p-r-20">6879 Fans</span>
                          <a
                            href="#"
                            className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03"
                          >
                            Like
                          </a>
                        </div>
                      </li>
                      <li className="flex-wr-sb-c p-b-20">
                        <a
                          href="#"
                          className="size-a-8 flex-c-c borad-3 size-a-8 bg-twitter fs-16 cl0 hov-cl0"
                        >
                          <span className="fab fa-twitter" />
                        </a>
                        <div className="size-w-3 flex-wr-sb-c">
                          <span className="f1-s-8 cl3 p-r-20">
                            568 Followers
                          </span>
                          <a
                            href="#"
                            className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03"
                          >
                            Follow
                          </a>
                        </div>
                      </li>
                      <li className="flex-wr-sb-c p-b-20">
                        <a
                          href="#"
                          className="size-a-8 flex-c-c borad-3 size-a-8 bg-youtube fs-16 cl0 hov-cl0"
                        >
                          <span className="fab fa-youtube" />
                        </a>
                        <div className="size-w-3 flex-wr-sb-c">
                          <span className="f1-s-8 cl3 p-r-20">
                            5039 Subscribers
                          </span>
                          <a
                            href="#"
                            className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03"
                          >
                            Subscribe
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Banner */}
        <div className="container">
          <div className="flex-c-c">
            <a href="#">
              <img
                className="max-w-full"
                src="images/banner-01.jpg"
                alt="IMG"
              />
            </a>
          </div>
        </div>
        {/* Latest */}
        <section className="bg0 p-t-60 p-b-35">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8 p-b-20">
                <div className="how2 how2-cl4 flex-s-c m-r-10 m-r-0-sr991">
                  <h3 className="f1-m-2 cl3 tab01-title">Latest Articles</h3>
                </div>
                <div className="row p-t-35">
                  <div className="col-sm-6 p-r-25 p-r-15-sr991">
                    {/* Item latest */}
                    <ItemAticleParentType/>
                  </div>
                  <div className="col-sm-6 p-r-25 p-r-15-sr991">
                    {/* Item latest */}
                    <ItemAticleParentType/>
                  </div>
                  <div className="col-sm-6 p-r-25 p-r-15-sr991">
                    {/* Item latest */}
                    <ItemAticleParentType/>
                  </div>
                  <div className="col-sm-6 p-r-25 p-r-15-sr991">
                    {/* Item latest */}
                    <ItemAticleParentType/>
                  </div>
                  <div className="col-sm-6 p-r-25 p-r-15-sr991">
                    {/* Item latest */}
                    <ItemAticleParentType/>
                  </div>
                  <div className="col-sm-6 p-r-25 p-r-15-sr991">
                    {/* Item latest */}
                    <ItemAticleParentType/>
                  </div>
                </div>
              </div>
              <div className="col-md-10 col-lg-4">
                <div className="p-l-10 p-rl-0-sr991 p-b-20">
                  {/* Video */}
                  <div className="p-b-55">
                    <div className="how2 how2-cl4 flex-s-c m-b-35">
                      <h3 className="f1-m-2 cl3 tab01-title">Featured Video</h3>
                    </div>
                    <div>
                      <div className="wrap-pic-w pos-relative">
                        <img src={Video} alt="IMG" />
                        <button
                          className="s-full ab-t-l flex-c-c fs-32 cl0 hov-cl10 trans-03"
                          data-toggle="modal"
                          data-target="#modal-video-01"
                        >
                          <span className="fab fa-youtube" />
                        </button>
                      </div>
                      <div className="p-tb-16 p-rl-25 bg3">
                        <h5 className="p-b-5">
                          <a href="#" className="f1-m-3 cl0 hov-cl10 trans-03">
                            Music lorem ipsum dolor sit amet consectetur
                          </a>
                        </h5>
                        <span className="cl15">
                          <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                            by John Alvarado
                          </a>
                          <span className="f1-s-3 m-rl-3">-</span>
                          <span className="f1-s-3">Feb 18</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Subscribe */}
                  <SubscribeEmail />
                  {/* Tag */}
                  <Tag />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
        {/* Modal Video 01*/}
        <div
          className="modal fade"
          id="modal-video-01"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document" data-dismiss="modal">
            <div
              className="close-mo-video-01 trans-0-4"
              data-dismiss="modal"
              aria-label="Close"
            >
              ×
            </div>
            <div className="wrap-video-mo-01">
              <div className="video-mo-01">
                <iframe
                  src="https://www.youtube.com/embed/wJnBTPUQS5A?rel=0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
