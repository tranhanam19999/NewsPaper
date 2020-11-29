import ItemAticleParentType from "../../components/ItemAticleParentType/itemAticleParentType";
import ItemArticleChildrenType from "../../components/ItemArticleChildrenType/itemArticleChildrenType";
const ArticleSecction = props => {
    return(
        <div className="tab01 p-b-20">
                    <div className="tab01-head how2 how2-cl1 bocl12 flex-s-c m-r-10 m-r-0-sr991">
                      <h3 className="f1-m-2 cl12 tab01-title">{props.label}</h3>
                      <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            data-toggle="tab"
                            href="#tab1-1"
                            role="tab"
                          >
                            All
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#tab1-2"
                            role="tab"
                          >
                            {props.label1}
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#tab1-3"
                            role="tab"
                          >
                            {props.label2}
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#tab1-4"
                            role="tab"
                          >
                            {props.label3}
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#tab1-5"
                            role="tab"
                          >
                            {props.label4}
                          </a>
                        </li>
                        <li className="nav-item-more dropdown dis-none">
                          <a
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                            href="#"
                          >
                            <i className="fa fa-ellipsis-h" />
                          </a>
                          <ul className="dropdown-menu"></ul>
                        </li>
                      </ul>
                      <a
                        href="category-01.html"
                        className="tab01-link f1-s-1 cl9 hov-cl10 trans-03"
                      >
                        View all
                        <i className="fs-12 m-l-5 fa fa-caret-right" />
                      </a>
                    </div>
                    <div className="tab-content p-t-35">
                      <div className="tab-pane fade show active" id="tab1-1" role="tabpanel">
                        <div className="row">
                          <div className="col-sm-6 p-r-25 p-r-15-sr991">
                            <ItemAticleParentType/>
                          </div>
                          <div className="col-sm-6 p-r-25 p-r-15-sr991">
                            <ItemArticleChildrenType/>
                            <ItemArticleChildrenType/>
                            <ItemArticleChildrenType/>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab1-2" role="tabpanel">
                        <div className="row">
                          <div className="col-sm-6 p-r-25 p-r-15-sr991">
                            <ItemAticleParentType/>
                          </div>
                          <div className="col-sm-6 p-r-25 p-r-15-sr991">
                            <ItemArticleChildrenType/>
                            <ItemArticleChildrenType/>
                            <ItemArticleChildrenType/>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab1-3" role="tabpanel">
                        <div className="row">
                          <div className="col-sm-6 p-r-25 p-r-15-sr991">
                            <ItemAticleParentType/>
                          </div>
                          <div className="col-sm-6 p-r-25 p-r-15-sr991">
                            <ItemArticleChildrenType/>
                            <ItemArticleChildrenType/>
                            <ItemArticleChildrenType/>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab1-4" role="tabpanel">
                        <div className="row">
                          <div className="col-sm-6 p-r-25 p-r-15-sr991">
                            <ItemAticleParentType/>
                          </div>
                          <div className="col-sm-6 p-r-25 p-r-15-sr991">
                            <ItemArticleChildrenType/>
                            <ItemArticleChildrenType/>
                            <ItemArticleChildrenType/>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab1-5" role="tabpanel">
                        <div className="row">
                          <div className="col-sm-6 p-r-25 p-r-15-sr991">
                            <ItemAticleParentType/>
                          </div>
                          <div className="col-sm-6 p-r-25 p-r-15-sr991">
                            <ItemArticleChildrenType/>
                            <ItemArticleChildrenType/>
                            <ItemArticleChildrenType/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    )
}
export default ArticleSecction;