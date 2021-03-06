import React from 'react';

import Layout from '../components/Layout';
import jikko_iincho from '../assets/images/jikkou-iincho.jpg';

const IndexPage = () => (
  <Layout>
	<div id="main">
		<div className="inner">
			<h1>実行委員長挨拶</h1>
			<span className="image left">
          		<img src={jikko_iincho} alt="" />
        	</span>
			<p>
				近年、テレビ CM やニュース、また広告でもよく見かけるようになりました
				「SDG’s（エスディージーズ）」=「持続可能な開発目標」を今回の阪神さくら地区
				活動振興大会のテーマとして取り上げて「みんなでもっと知ろうSDG's」として
				進めました。
			</p>
			<p>
				ちょうどSDG'sが17項目の目標でしたので阪神さくら地区17個団がひとつずつ研究し、
				理解を深め、最後に成果をまとめて開催会場の夙川公園に17枚のパネルにして展示する。
				また他団作成のアイテムを見学することでさらにSDG’sの理解を深めることを
				ねらいとして取り組みました。
			</p>
			<p>
				しかし、緊急事態宣言が9月末まで延長されたことで対面での活動ができなくなったため
				各団が取り組まれた成果物をオンラインで見れるようにして「オンライン活動振興大会」
				に切り替えて進めることといたしました。
			</p>
			<p>
				対面での活動ができなくなったことはとても残念ですが、この「オンライン活動振興大会」
				を有効に使っていただいてSDG'sの取り組みの理解を深めていただき、また行動の変化に
				つなげるきっかけにしていただけたら願っております。
			</p>
			<p>
				実行委員長　高田幹生（西宮第9団）
        	</p>
		</div>
	</div>

  </Layout>
);

export default IndexPage;
