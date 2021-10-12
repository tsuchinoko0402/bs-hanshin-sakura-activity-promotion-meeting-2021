import React from 'react';

import Layout from '../components/Layout';
import icon from '../assets/images/sdgs_icon/10.png';
import image1 from '../assets/images/n20/n20_1.jpg';
import image2 from '../assets/images/n20/n20_2.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>10　人や国の不平等をなくそう</h1>
        <p>
          担当：西宮第20団
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
