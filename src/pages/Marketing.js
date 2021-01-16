import React from 'react';

import Layout from '../components/Layout';
import pic1 from '../assets/images/01.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner has-text-centered">
        <h1>Marketing</h1>
        <span className="image main">
          <img src={pic1} alt="" />
        </span>
        <p>
         Wil je het meeste uit je website en bedrijf halen dan is marketing van cruciaal belang en een van de meest krachtige tools in het assortiment van de moderne ondernemer. Moderne marketing opent deuren zoals nooit tevoren.
        </p>
        <p>
Een goede marketing strategie, begint als iedere andere strategie met een goed plan van aanpak en heldere doelstellingen. Wij beginnen dan ook als eerst met het op een rij zetten van uw wensen. Wat wil je precies overbrengen, aan wie wil je het overbrengen? Weet je al wat er allemaal al online mogelijk is? Zo stellen we samen een plan van aanpak samen en gaan we kijken wat voor middelen we daarvoor gaan inzetten. Enkele van de methodes in ons assortiment zijn social media marketing, zoekmachinemarketing(SEA), display adverteren, e-mail marketing, en printmarketing.
        </p>
     
      </div>
    </div>
  </Layout>
);

export default IndexPage;
