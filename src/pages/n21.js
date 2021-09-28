import React from 'react';

import Layout from '../components/Layout';
import icon from '../assets/images/sdgs_icon/12.png';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>12　つくる責任つかう責任</h1>
        <p>
          担当：西宮第21団
        </p>
        <span className="image sdgs_icon">
          <img src={icon} alt="" />
        </span>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
