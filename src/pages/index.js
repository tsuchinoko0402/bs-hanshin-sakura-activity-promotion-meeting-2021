import React from 'react';

import Layout from '../components/Layout';

import wheel from '../assets/images/sdgs_icon/wheel.png';
import n2 from '../assets/images/n2_top.jpg';
import n10 from '../assets/images/n10_cs_all.jpg';
import n11 from '../assets/images/n11_bvs.jpg';
import a1 from '../assets/images/a1_all.jpg';
import a3 from '../assets/images/a3_bs_1.png';

import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <header>
          <h1>
            ボーイスカウト阪神さくら地区　活動振興大会2021　特設ページ
            <br />
          </h1>
          <p>
            本年の活動テーマは<b>「みんなでもっと知ろうSDG's」</b>です。 SDG's の 17 の活動目標について、
            各団が一つずつ研究しました。 <br />
            本来であれば、夙川河川敷の各所に展示する予定だった、各団の研究成果を掲載します。
          </p>
        </header>
        <section className="tiles">
          <article className="style1">
            <span className="image">
              <img src={n2} alt="" />
            </span>
            <Link to="/n2">
              <h2>1 貧困をなくそう</h2>
              <div className="content">
                <p>
                  西宮第2団
                </p>
              </div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
              <img src={wheel} alt="" />
            </span>
            <Link to="/n9">
              <h2>2 飢餓をゼロに</h2>
              <div className="content">
                <p>
                  西宮第9団
                </p>
              </div>
            </Link>
          </article>
          <article className="style3">
            <span className="image">
              <img src={n10} alt="" />
            </span>
            <Link to="/n10">
              <h2>3 すべての人に健康と福祉を</h2>
              <div className="content">
                <p>
                  西宮第10団
                </p>
              </div>
            </Link>
          </article>
          <article className="style4">
            <span className="image">
              <img src={a1} alt="" />
            </span>
            <Link to="/a1">
              <h2>4 質の高い教育をみんなに</h2>
              <div className="content">
                <p>
                  芦屋第1団
                </p>
              </div>
            </Link>
          </article>
          <article className="style5">
            <span className="image">
              <img src={wheel} alt="" />
            </span>
            <Link to="/n27">
              <h2>5 ジェンダー平等を実現しよう</h2>
              <div className="content">
                <p>
                  西宮第27団
                </p>
              </div>
            </Link>
          </article>
          <article className="style6">
            <span className="image">
              <img src={wheel} alt="" />
            </span>
            <Link to="/n22">
              <h2>6 安全な水とトイレを世界中に</h2>
              <div className="content">
                <p>
                  西宮第22団
                </p>
              </div>
            </Link>
          </article>
          <article className="style7">
            <span className="image">
              <img src={wheel} alt="" />
            </span>
            <Link to="/n1">
              <h2>7 エネルギーをみんなにそしてクリーンに</h2>
              <div className="content">
                <p>
                  西宮第1団
                </p>
              </div>
            </Link>
          </article>
          <article className="style8">
            <span className="image">
              <img src={wheel} alt="" />
            </span>
            <Link to="/n3">
              <h2>8 働きがいも経済成長も</h2>
              <div className="content">
                <p>
                  西宮第3団
                </p>
              </div>
            </Link>
          </article>
          <article className="style9">
            <span className="image">
              <img src={wheel} alt="" />
            </span>
            <Link to="/n6">
              <h2>9 産業と技術革新の基盤をつくろう</h2>
              <div className="content">
                <p>
                  西宮第6団
                </p>
              </div>
            </Link>
          </article>
          <article className="style10">
            <span className="image">
              <img src={wheel} alt="" />
            </span>
            <Link to="/n20">
              <h2>10 人や国の不平等をなくそう</h2>
              <div className="content">
                <p>
                  西宮第20団
                </p>
              </div>
            </Link>
          </article>
          <article className="style11">
            <span className="image">
              <img src={n11} alt="" />
            </span>
            <Link to="/n11">
              <h2>11 住み続けられるまちづくりを</h2>
              <div className="content">
                <p>
                  西宮第11団
                </p>
              </div>
            </Link>
          </article>
          <article className="style12">
            <span className="image">
              <img src={wheel} alt="" />
            </span>
            <Link to="/n21">
              <h2>12 つくる責任つかう責任</h2>
              <div className="content">
                <p>
                  西宮第21団
                </p>
              </div>
            </Link>
          </article>
          <article className="style13">
            <span className="image">
              <img src={wheel} alt="" />
            </span>
            <Link to="/n13">
              <h2>13 気候変動に具体的な対策を</h2>
              <div className="content">
                <p>
                  西宮第13団
                </p>
              </div>
            </Link>
          </article>
          <article className="style14">
            <span className="image">
              <img src={wheel} alt="" />
            </span>
            <Link to="/n12">
              <h2>14 海の豊かさを守ろう</h2>
              <div className="content">
                <p>
                  西宮第12団
                </p>
              </div>
            </Link>
          </article>
          <article className="style15">
            <span className="image">
              <img src={wheel} alt="" />
            </span>
            <Link to="/n7">
              <h2>15 陸の豊かさも守ろう</h2>
              <div className="content">
                <p>
                  西宮第7団
                </p>
              </div>
            </Link>
          </article>
          <article className="style16">
            <span className="image">
              <img src={wheel} alt="" />
            </span>
            <Link to="/n25">
              <h2>16 平和と公正をすべての人に</h2>
              <div className="content">
                <p>
                  西宮第25団
                </p>
              </div>
            </Link>
          </article>
          <article className="style17">
            <span className="image">
              <img src={a3} alt="" />
            </span>
            <Link to="/a3">
              <h2>17 パートナーシップで目標を達成しよう</h2>
              <div className="content">
                <p>
                  芦屋第3団
                </p>
              </div>
            </Link>
          </article>
       </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
