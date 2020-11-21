import React from 'react'
import Breadcumb from '../../Components/Breadcumb/breadcumb'
import ItemArticleCategory from '../../Components/ItemArticleCategory/itemArticleCategory'
import ItemBannerArticle from '../../Components/ItemBannerArticle/ItemBannerArticle'
import Footer from '../../Components/Layout/footer'
import Header from '../../Components/Layout/header'
import Pagination from '../../Components/Pagination/Pagination'

class Category extends React.Component{
  render(){
    return(
      <div className="animsition">
        {/* Header */}
        <Header/>
        {/* Breadcrumb */}
        <Breadcumb label = "Category" label1 = "Entertaiment"/>
        {/* Page heading */}
        <div className="container p-t-4 p-b-40">
          <h2 className="f1-l-1 cl2">
            Entertaiment
          </h2>
        </div>
        {/* Feature post */}
        <section className="bg0">
          <div className="container">
            <div className="row m-rl--1">
              <div className="col-12 p-rl-1 p-b-2">
                {/* Item */}
                <ItemBannerArticle typeItem="first"/>
              </div>
              {/* Item */}
              <ItemBannerArticle typeItem="children1" />
              <ItemBannerArticle typeItem="children1" />
              <ItemBannerArticle typeItem="children1" />
              <ItemBannerArticle typeItem="children1" />
            </div>
          </div>
        </section>
        {/* Post */}
        <section className="bg0 p-t-110 p-b-25">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8 p-b-80">
                <div className="row">
                  <div className="col-sm-6 p-r-25 p-r-15-sr991">
                    {/* Item */}
                    <ItemArticleCategory/>
                    {/* Item */}
                    <ItemArticleCategory/>
                    {/* Item */}
                    <ItemArticleCategory/>
                  </div>
                  <div className="col-sm-6 p-r-25 p-r-15-sr991">
                    {/* Item */}
                    <ItemArticleCategory/>
                    {/* Item */}
                    <ItemArticleCategory/>
                    {/* Item */}
                    <ItemArticleCategory/>
                  </div>
                </div>
                {/* Pagination */}
                <Pagination/>
              </div>
              <div className="col-md-10 col-lg-4 p-b-80">
                <div className="p-l-10 p-rl-0-sr991">
                  {/* Banner */}
                  <div className="flex-c-s">
                    <a href="#">
                      <img className="max-w-full" src="images/banner-02.jpg" alt="IMG" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <Footer/>
      </div>
    );
  }
}

export default Category;