import React from 'react';

import Layout from '../components/Layout';
import pic1 from '../assets/images/01.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner has-text-centered">
        <h1>Website Beheer</h1>
        <span className="image main">
          <img src={pic1} alt="" />
        </span>
        <p>
      Als ondernemer wilt u doen waar u goed in bent, ondernemen. Dan is het makkelijk als u het technische gedeelte over kunt laten aan ons. Dat betekend dat u zichzelf nergens druk over hoeft te maken en dat uw website altijd online is, up to date is, en dat eventuele wijzingen binnen no-time gemaakt kunnen worden door een expert.
        </p>
        <p>
         Wij garanderen 99.99% uptime en razend snelle hosting via een CDN, dat betekend dat het niet uit maakt van waar ter wereld klanten uw website bezoeken, want hij is altijd even snel.
        </p>
        <p>
         
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
