import React from 'react';

import Layout from '../components/Layout';
import bp from '../assets/images/bp.png';

const IndexPage = () => (
  <Layout>
	<div id="main">
		<div className="inner">
			<h1>実行委員長挨拶</h1>
			<span className="image left">
          		<img src={bp} alt="" />
        	</span>
			<p>
          		ここに実行委員長の挨拶が入ります。
        	</p>
		</div>
	</div>

  </Layout>
);

export default IndexPage;
