import React from 'react';

import Layout from '../components/Layout';
import icon from '../assets/images/sdgs_icon/07.png';
import image1 from '../assets/images/n1/n1_bvs_1.jpg';
import image2 from '../assets/images/n1/n1_bvs_2.jpg';
import image3 from '../assets/images/n1/n1_bvs_3.jpg';
import image4 from '../assets/images/n1/n1_bvs_4.jpg';
import image5 from '../assets/images/n1/n1_bvs_5.jpg';
import image6 from '../assets/images/n1/n1_bvs_6.jpg';
import image7 from '../assets/images/n1/n1_bvs_7.jpg';
import image8 from '../assets/images/n1/n1_bvs_8.jpg';
import image9 from '../assets/images/n1/n1_bvs_9.jpg';
import image10 from '../assets/images/n1/n1_bvs_10.jpg';
import image11 from '../assets/images/n1/n1_bvs_11.jpg';
import image12 from '../assets/images/n1/n1_bvs_12.jpg';
import image13 from '../assets/images/n1/n1_bvs_13.jpg';
import image14 from '../assets/images/n1/n1_cs_1.jpg';
import image15 from '../assets/images/n1/n1_cs_2.jpg';
// import image16 from '../assets/images/n1/n1_bs_2.jpeg';
import image17 from '../assets/images/n1/n1_bs_3.jpeg';
import image18 from '../assets/images/n1/n1_bs_4.jpeg';
import image19 from '../assets/images/n1/n1_bs_5.jpeg';
import image20 from '../assets/images/n1/n1_bs_6.jpeg';
import image21 from '../assets/images/n1/n1_bs_7.jpeg';
import image22 from '../assets/images/n1/n1_bs_8.jpeg';
import image23 from '../assets/images/n1/n1_bs_9.jpeg';
import image24 from '../assets/images/n1/n1_vs_1.jpg';
import image25 from '../assets/images/n1/n1_vs_2.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>7　エネルギーをみんなにそしてクリーンに</h1>
        <p>
          担当：西宮第1団
        </p>
        <div className="box alt">
						<div className="row gtr-uniform">
              <div className="col-4"><span className="image fit"><img src={image1} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={image2} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={image3} alt="" /></span></div>
          </div>
        </div> 
        <div className="box alt">
						<div className="row gtr-uniform">
              <div className="col-4"><span className="image fit"><img src={image4} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={image5} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={image6} alt="" /></span></div>
          </div>
        </div> 
        <div className="box alt">
						<div className="row gtr-uniform">
              <div className="col-4"><span className="image fit"><img src={image7} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={image8} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={image9} alt="" /></span></div>
          </div>
        </div> 
        <div className="box alt">
						<div className="row gtr-uniform">
              <div className="col-4"><span className="image fit"><img src={image10} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={image11} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={image12} alt="" /></span></div>
          </div>
        </div> 
        <div className="box alt">
						<div className="row gtr-uniform">
              <div className="col-4"><span className="image fit"><img src={image13} alt="" /></span></div>
          </div>
        </div> 
        <div className="box alt">
						<div className="row gtr-uniform">
              <div className="col-6"><span className="image fit"><img src={image14} alt="" /></span></div>
              <div className="col-6"><span className="image fit"><img src={image15} alt="" /></span></div>
          </div>
        </div>
        <span className="image main">
          <img src={image17} alt="" />
        </span>
        <span className="image main">
          <img src={image18} alt="" />
        </span>
        <span className="image main">
          <img src={image19} alt="" />
        </span>
        <span className="image main">
          <img src={image20} alt="" />
        </span>
        <span className="image main">
          <img src={image21} alt="" />
        </span>
        <span className="image main">
          <img src={image22} alt="" />
        </span>
        <span className="image main">
          <img src={image23} alt="" />
        </span>
        <div className="box alt">
						<div className="row gtr-uniform">
              <div className="col-6"><span className="image fit"><img src={image24} alt="" /></span></div>
              <div className="col-6"><span className="image fit"><img src={image25} alt="" /></span></div>
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
