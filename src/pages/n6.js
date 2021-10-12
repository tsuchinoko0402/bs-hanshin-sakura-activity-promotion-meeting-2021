import React from 'react';

import Layout from '../components/Layout';
import icon from '../assets/images/sdgs_icon/09.png';
import image1 from '../assets/images/n6.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>9　産業と技術革新の基盤をつくろう</h1>
        <p>
          担当：西宮第6団
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
