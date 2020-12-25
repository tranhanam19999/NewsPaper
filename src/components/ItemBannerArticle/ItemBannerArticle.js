const ItemBannerArticle = (props) => {
  return (

    <div class={props.typeItem == "children1" ? "col-sm-6 col-md-3 p-rl-1 p-b-2" : ""+ props.typeItem == "first" ? "col-12 p-rl-1 p-b-2" : "" + props.typeItem == "second" ? "col-12 p-rl-1 p-b-2" : "" + props.typeItem == "children" ? "col-sm-6 p-rl-1 p-b-2" : "col-md-6 p-rl-1 p-b-2" }>
      <div class={props.typeItem == "children1" ? "bg-img1 size-a-14 how1 pos-relative":"" +props.typeItem == "second" ? "size-a-4 bg-img1 how1 pos-relative" : "" +  props.typeItem == "children" ? "size-a-5 bg-img1 how1 pos-relative" : "size-a-3 bg-img1 how1 pos-relative"}>
        
        <a
          href="blog-detail-01.html"
          class="dis-block how1-child1 trans-03"
        ></a>
        <div class={props.typeItem == "second" ? "p-tb-24 flex-col-e-s s-full p-rl-25" : props.typeItem == "children" ? "p-tb-20 flex-col-e-s s-full p-rl-25" : " p-tb-20 flex-col-e-s s-full p-rl-25"}>
          <a
            href="#"
            class="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
          >
            Business
          </a>
          <h3 class={props.typeItem == "children1" ? " how1-child2 m-t-14" : "" + props.typeItem == "second" ? "how1-child2 m-t-14" : props.typeItem == "children" ? "how1-child2 m-t-14" : "how1-child2 m-t-14 m-b-10"}>
            <a
              href="/articleDetail"
              class={props.typeItem == "children1" ? " how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03" : "" + props.typeItem == "second" ? " how-txt1 size-a-7 f1-l-2 cl0 hov-cl10 trans-03" : "" + props.typeItem == "children" ? " how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03" : " how-txt1 size-a-6 f1-l-1 cl0 hov-cl10 trans-03" }
            >
              Microsoft quisque at ipsum vel orci eleifend ultrices
            </a>
          </h3>
          <span class="how1-child2">
            <span class="f1-s-4 cl11">Jack Sims</span>
            <span class="f1-s-3 cl11 m-rl-3">-</span>
            <span class="f1-s-3 cl11">Feb 16</span>
          </span>
        </div>
      </div>
    </div>
  
  );
};
export default ItemBannerArticle;
