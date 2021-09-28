import React from 'react';

import Layout from '../components/Layout';
import icon from '../assets/images/sdgs_icon/02.png';
import image_cs_1 from '../assets/images/n9/n9_cs_1.jpg';
import image_cs_2 from '../assets/images/n9/n9_cs_2.jpg';
import image_cs_3 from '../assets/images/n9/n9_cs_3.jpg';
import image_cs_4 from '../assets/images/n9/n9_cs_4.jpg';
import image_cs_5 from '../assets/images/n9/n9_cs_5.jpg';
import image_cs_6 from '../assets/images/n9/n9_cs_6.jpg';
import image_cs_7 from '../assets/images/n9/n9_cs_7.jpg';
import image_cs_8 from '../assets/images/n9/n9_cs_8.jpg';
import image_bvs_1 from '../assets/images/n9/n9_bvs_1.jpg';
import image_bvs_2 from '../assets/images/n9/n9_bvs_2.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>2　飢餓をゼロに</h1>
        <p>
          担当：西宮第9団
        </p>
        <div className="box alt">
          <div className="row gtr-uniform">
            <div className="col-6"><span className="image fit"><img src={image_cs_1} alt="" /></span></div>
            <div className="col-6"><span className="image fit"><img src={image_cs_3} alt="" /></span></div>
          </div>
        </div>
        <div className="box alt">
          <div className="row gtr-uniform">
            <div className="col-6"><span className="image fit"><img src={image_cs_2} alt="" /></span></div>
            <div className="col-6"><span className="image fit"><img src={image_cs_4} alt="" /></span></div>
          </div>
        </div>
        <div className="box alt">
          <div className="row gtr-uniform">
            <div className="col-6"><span className="image fit"><img src={image_cs_5} alt="" /></span></div>
            <div className="col-6"><span className="image fit"><img src={image_cs_6} alt="" /></span></div>
          </div>
        </div>
        <div className="box alt">
          <div className="row gtr-uniform">
            <div className="col-6"><span className="image fit"><img src={image_cs_7} alt="" /></span></div>
            <div className="col-6"><span className="image fit"><img src={image_cs_8} alt="" /></span></div>
          </div>
        </div>
        <div className="box alt">
          <div className="row gtr-uniform">
            <div className="col-6"><span className="image fit"><img src={image_bvs_1} alt="" /></span></div>
            <div className="col-6"><span className="image fit"><img src={image_bvs_2} alt="" /></span></div>
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
