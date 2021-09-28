import React from 'react';

import Layout from '../components/Layout';
import icon from '../assets/images/sdgs_icon/06.png';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>6　安全な水とトイレを世界中に</h1>
        <p>
          担当：西宮第22団
        </p>
        <span className="image sdgs_icon">
          <img src={icon} alt="" />
        </span>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
