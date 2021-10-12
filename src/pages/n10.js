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
import image8 from '../assets/images/n10/n10_bvs.jpg';
import image9 from '../assets/images/n10/n10_vs_1.jpg';
import image10 from '../assets/images/n10/n10_vs_2.jpg';
import image11 from '../assets/images/n10/n10_vs_3.jpg';
import image12 from '../assets/images/n10/n10_vs_4.jpg';
import image13 from '../assets/images/n10/n10_vs_5.jpg';
import image14 from '../assets/images/n10/n10_vs_6.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>3　すべての人に健康と福祉を</h1>
        <p>
          担当：西宮第10団
        </p>
        <span className="image main">
          <img src={image8} alt="" />
        </span>
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
        <div className="box alt">
						<div className="row gtr-uniform">
              <div className="col-6"><span className="image fit"><img src={image9} alt="" /></span></div>
              <div className="col-6"><span className="image fit"><img src={image10} alt="" /></span></div>
          </div>
        <div className="box alt">
						<div className="row gtr-uniform">
              <div className="col-6"><span className="image fit"><img src={image11} alt="" /></span></div>
              <div className="col-6"><span className="image fit"><img src={image12} alt="" /></span></div>
          </div>
        </div>
        </div>
        <div className="box alt">
						<div className="row gtr-uniform">
              <div className="col-6"><span className="image fit"><img src={image13} alt="" /></span></div>
              <div className="col-6"><span className="image fit"><img src={image14} alt="" /></span></div>
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
