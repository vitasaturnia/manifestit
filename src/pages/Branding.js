import React from 'react';

import Layout from '../components/Layout';
import pic1 from '../assets/images/01.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner has-text-centered">
        <h1>Branding</h1>
        <span className="image main">
          <img src={pic1} alt="" />
        </span>
        <p>
Een sterk merk is de sleutel naar succes. Het is niet voor niets dat de meest succevolle bedrijven hun succes te danken hebben aan hun branding. Een merk hoort te staan voor meer dan alleen een naam, een merk staat vaak voor een verhaal, voor een beleving, of voor een levensstijl.
        </p>
        <p>
          Een goed merk begint altijd met een goed plan. Wat is uw doelgroep? Wat voor beleving wilt u uw klanten geven? Wie of wat wil u zijn? Wij denken met u mee en geven uw merk een verhaal. Vanaf daar beginnen we met het bouwen van uw huisstijl om uw merk tot leven te brengen. 
        </p>
     
      </div>
    </div>
  </Layout>
);

export default IndexPage;
