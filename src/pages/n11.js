import React from 'react';

import Layout from '../components/Layout';
import icon from '../assets/images/sdgs_icon/11.png';
import image1 from '../assets/images/n11_bvs.jpg';
import image2 from '../assets/images/n11_cs_all.jpg';
import image3 from '../assets/images/n11_cs_1.jpg';
import image4 from '../assets/images/n11_cs_2.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>11　住み続けられるまちづくりを</h1>
        <p>
          担当：西宮第11団
        </p>
        <span className="image main">
          <img src={image1} alt="" />
        </span>
        <span className="image main">
          <img src={image2} alt="" />
        </span>
        <div className="box alt">
						<div className="row gtr-uniform">
              <div className="col-6"><span className="image fit"><img src={image3} alt="" /></span></div>
              <div className="col-6"><span className="image fit"><img src={image4} alt="" /></span></div>
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
