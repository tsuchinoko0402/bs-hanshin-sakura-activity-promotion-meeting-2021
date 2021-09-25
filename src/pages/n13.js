import React from 'react';

import Layout from '../components/Layout';
import icon from '../assets/images/sdgs_icon/13.png';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>13　気候変動に具体的な対策を</h1>
        <p>
          担当：西宮第13団
        </p>
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
