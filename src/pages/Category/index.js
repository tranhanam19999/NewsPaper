import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticel } from "../../store/article";
import Breadcumb from "../../components/Breadcumb/breadcumb";
import ItemArticleCategory from "../../components/ItemArticleCategory/itemArticleCategory";
import ItemBannerArticle from "../../components/ItemBannerArticle/ItemBannerArticle";
import Footer from "../../components/Layout/footer";
import Header from "../../components/Layout/header";
import Pagination from "../../components/Pagination/Pagination";
import imgbanner from '../../assets/images/banner-02.jpg'
const Category = (props) => {
  
  let articles = props.location.state


console.log(articles, 'data')
 

  return (
    <div className="animsition">
      <Header />
      <Breadcumb label="Category" label1="Entertaiment" />
      <div className="container p-t-4 p-b-40">
        <h2 className="f1-l-1 cl2">Entertaiment</h2>
      </div>

      <section className="bg0">
        <div className="container">
          <div className="row m-rl--1">
            <div className="col-12 p-rl-1 p-b-2">
              <ItemBannerArticle typeItem="first" />
            </div>
            <ItemBannerArticle typeItem="children1" />
            <ItemBannerArticle typeItem="children1" />
            <ItemBannerArticle typeItem="children1" />
            <ItemBannerArticle typeItem="children1" />
          </div>
        </div>
      </section>

      <section className="bg0 p-t-110 p-b-25">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 p-b-80">
              <div className="row">
                <div className="col-sm-6 p-r-25 p-r-15-sr991">
                  {articles.map((item, idx) => {
                    if (idx % 2 == 0) {
                      return <ItemArticleCategory data={item}/>;
                    }
                  })}
                </div>
                <div className="col-sm-6 p-r-25 p-r-15-sr991">
                  {articles.map((item, idx) => {
                    if (idx % 2 != 0) {
                      return <ItemArticleCategory data={item}/>;
                    }
                  })}
                </div>
              </div>
              <Pagination />
            </div>
            <div className="col-md-10 col-lg-4 p-b-80">
              <div className="p-l-10 p-rl-0-sr991">
                <div className="flex-c-s">
                  <a href="#">
                    <img
                      className="max-w-full"
                      src={imgbanner}
                      alt="IMG"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Category;
