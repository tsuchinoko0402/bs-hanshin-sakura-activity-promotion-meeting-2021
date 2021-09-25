import React from 'react';

import Layout from '../components/Layout';
import icon from '../assets/images/sdgs_icon/02.png';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>2　飢餓をゼロに</h1>
        <p>
          担当：西宮第9団
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
