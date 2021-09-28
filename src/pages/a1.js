import React from 'react';

import Layout from '../components/Layout';
import icon from '../assets/images/sdgs_icon/04.png';
import image1 from '../assets/images/a1/a1_1.jpg';
import image2 from '../assets/images/a1/a1_2.jpg';
import image3 from '../assets/images/a1/a1_all.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>4　質の高い教育をみんなに</h1>
        <p>
          担当：芦屋第1団
        </p>
        <span className="image main">
          <img src={image1} alt="" />
        </span>
        <span className="image main">
          <img src={image2} alt="" />
        </span>
        <span className="image main">
          <img src={image3} alt="" />
        </span>
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
