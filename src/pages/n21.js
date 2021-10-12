import React from 'react';

import Layout from '../components/Layout';
import icon from '../assets/images/sdgs_icon/12.png';
import image1 from '../assets/images/n21/n21_all.jpg';
import image2 from '../assets/images/n21/n21_haifu.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>12　つくる責任つかう責任</h1>
        <p>
          担当：西宮第21団
        </p>
        <span className="image main">
          <img src={image1} alt="" />
        </span>
        <span className="image main">
          <img src={image2} alt="" />
        </span>
        <span className="image sdgs_icon">
          <img src={icon} alt="" />
        </span>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
