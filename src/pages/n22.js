import React from 'react';

import Layout from '../components/Layout';
import icon from '../assets/images/sdgs_icon/06.png';
import image1 from '../assets/images/n22/n22_cs_1.jpg';
import image2 from '../assets/images/n22/n22_cs_2.jpg';
import image3 from '../assets/images/n22/n22_bs_1.jpg'
import image4 from '../assets/images/n22/n22_bs_2.jpg'
import image5 from '../assets/images/n22/n22_bs_3.jpg'

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>6　安全な水とトイレを世界中に</h1>
        <p>
          担当：西宮第22団
        </p>
        <div className="box alt">
          <div className="row gtr-uniform">
            <div className="col-6"><span className="image fit"><img src={image1} alt="" /></span></div>
            <div className="col-6"><span className="image fit"><img src={image2} alt="" /></span></div>
          </div>
        </div>
        <div className="box alt">
          <div className="row gtr-uniform">
            <div className="col-6"><span className="image fit"><img src={image3} alt="" /></span></div>
            <div className="col-6"><span className="image fit"><img src={image5} alt="" /></span></div>
          </div>
        </div>
        <span className="image fit">
          <img src={image4} alt="" />
        </span>
        <span className="image sdgs_icon">
          <img src={icon} alt="" />
        </span>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
