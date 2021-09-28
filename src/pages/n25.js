import React from 'react';

import Layout from '../components/Layout';
import icon from '../assets/images/sdgs_icon/16.png';
import image1 from '../assets/images/n25.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>16　平和と公正をすべての人に</h1>
        <p>
          担当：西宮第25団
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
