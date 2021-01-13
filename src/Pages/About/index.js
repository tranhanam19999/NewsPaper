import React from 'react';
import Header from '../../components/Layout/header'
import Footer from '../../components/Layout/footer'
import PopularPosts from '../../components/PopularPosts/popularposts';
import Breadcumb from '../../components/Breadcumb/breadcumb';

const About = () => { 

      return (
          <div className="animsition">
      <Header/>
      <Breadcumb label1 = "Giới Thiệu"/>
      <div className="container p-t-4 p-b-35">
        <h2 className="f1-l-1 cl2">
          Giới Thiệu Về Chúng Tôi
        </h2>
      </div>
      <section className="bg0 p-b-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-8 p-b-30">
              <div className="p-r-10 p-r-0-sr991">
                <p className="f1-s-11 cl6 p-b-25">
                  MAGNEWS là một trang tin tức được thành lập bới một nhóm sinh viên. Mục đích của trang web là cung cấp thông tin nhiều nhất có thể trên mọi lĩnh vực để người xem bắt kịp được xu hướng.
                </p>
                <p className="f1-s-11 cl6 p-b-25">
                  Nhiều lĩnh vực được MAGNEWS liên tục cập nhật như Giải trí, Thời trang, Tin nóng, Kinh doanh, Du lịch, Công nghệ,... Chúng tôi liên tục cập nhật nhiều lĩnh vực mới, thông tin mới nhất lên trang web. Đảm bảo cho việc tìm hiểu thông tin của bạn đúng xu hướng hiện tại.
                </p>
                <p className="f1-s-11 cl6 p-b-25">
                  Và chúng tôi rất lấy làm vinh hạnh vì bạn đã ghé thăm và trở thành một thành viên của gia đình MAGNEWS. Nơi bạn có thể tìm thấy một lượng thông tin khổng lồ được chắt lọc cẩn thận. Mỗi lĩnh vực được chúng tôi tìm hiểu, thu thập và chắt lọc từ nhiều nguồn khác nhau từ trong nước đến ngoài nước. Đội ngũ tin tức của chúng tôi làm việc thường xuyên, liên tục. Chúng tôi tuy là những người trẻ nhưng có niềm đam mê và nhiệt huyết với công việc. Bằng sức trẻ, bằng kiến thức và đôi tay này, chúng tôi sẽ đem lại cho bạn nhiều tin tức bổ ích cho cuộc sống của bạn, của cộng đồng.
                </p>
              </div>
            </div>
            
            <div className="col-md-5 col-lg-4 p-b-80">
              <div className="p-l-10 p-rl-0-sr991">
                <PopularPosts/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
      </div>
      );
}
export default About;