import React from 'react';

import Layout from '../components/Layout';
import icon from '../assets/images/sdgs_icon/14.png';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>14　海の豊かさを守ろう</h1>
        <p>
          担当：西宮第12団
        </p>
        <span className="image sdgs_icon">
          <img src={icon} alt="" />
        </span>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
