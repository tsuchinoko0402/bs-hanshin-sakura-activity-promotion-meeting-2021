import React from 'react';

import Layout from '../components/Layout';
import icon from '../assets/images/sdgs_icon/13.png';
import image1 from '../assets/images/n13_cs_1.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>13　気候変動に具体的な対策を</h1>
        <p>
          担当：西宮第13団
        </p>
        <span className="image main">
          <img src={image1} alt="" />
        </span>
        <span className="image sdgs_icon">
          <img src={icon} alt="" />
        </span>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
