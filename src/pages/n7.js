import React from 'react';

import Layout from '../components/Layout';
import icon from '../assets/images/sdgs_icon/15.png';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>15　陸の豊かさも守ろう</h1>
        <p>
          担当：西宮第7団
        </p>
        <span className="image sdgs_icon">
          <img src={icon} alt="" />
        </span>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
