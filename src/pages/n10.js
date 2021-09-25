import React from 'react';

import Layout from '../components/Layout';
import icon from '../assets/images/sdgs_icon/03.png';
import image1 from '../assets/images/n10_cs_all.jpg';
import image2 from '../assets/images/n10_cs_1.jpg';
import image3 from '../assets/images/n10_cs_2.jpg';
import image4 from '../assets/images/n10_cs_3.jpg';

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
        <span className="image sdgs_icon">
          <img src={icon} alt="" />
        </span>
        <p>
          ここに説明などがあれば書く。
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
