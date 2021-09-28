import React from 'react';

import Layout from '../components/Layout';
import icon from '../assets/images/sdgs_icon/03.png';
import image1 from '../assets/images/n10/n10_cs_all.jpg';
import image2 from '../assets/images/n10/n10_cs_1.jpg';
import image3 from '../assets/images/n10/n10_cs_2.jpg';
import image4 from '../assets/images/n10/n10_cs_3.jpg';
import image5 from '../assets/images/n10/n10_bs_1.jpg';
import image6 from '../assets/images/n10/n10_bs_2.jpg';
import image7 from '../assets/images/n10/n10_bs_3.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>3　すべての人に健康と福祉を</h1>
        <p>
          担当：西宮第10団
        </p>
        <span className="image main">
          <img src={image1} alt="" />
        </span>
        <div className="box alt">
						<div className="row gtr-uniform">
              <div className="col-4"><span className="image fit"><img src={image2} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={image3} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={image4} alt="" /></span></div>
          </div>
        </div>
        <div className="box alt">
						<div className="row gtr-uniform">
              <div className="col-4"><span className="image fit"><img src={image5} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={image6} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={image7} alt="" /></span></div>
          </div>
        </div>
        <span className="image sdgs_icon">
          <img src={icon} alt="" />
        </span>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
