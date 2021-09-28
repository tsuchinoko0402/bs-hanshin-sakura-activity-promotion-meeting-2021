import React from 'react';

import Layout from '../components/Layout';
import icon from '../assets/images/sdgs_icon/08.png';
import image1 from '../assets/images/n3.jpeg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>8　働きがいも経済成長も</h1>
        <p>
          担当：西宮第3団
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
