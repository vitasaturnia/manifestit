import React from 'react';

import Layout from '../components/Layout';
import pic1 from '../assets/images/01.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>SEO</h1>
        <span className="image main">
          <img src={pic1} alt="" />
        </span>
        <p>
         Om als bedrijf een goede website is van noodzaak, maar wat heb je aan een website als deze niet vindbaar is? Hier begint SEO. Een goede score, goede organische vindbaarheid, en goede vindbaarheid voor de zoektermen die er voor u toe doen is van essentieel belang voor de groei van uw bedrijf.

        </p>
        <p>
          Goede SEO begint met een goede website, want er zijn heel veel factoren die de google score van uw website bepalen, enkele daarvan zijn de snelheid en opbouw van de website (hierom gebruiken wij graag Gatsby), de content van de website, de zoekwoorden en het linkprofiel. Al deze factoren samen worden door google's algoritme beoordeelt en dit bepaalt uw google score en de vindbaarheid van uw website.
        </p>
        <p>
         Zoals u waarschijnlijk al doorheeft gaan webdevelopment en SEO hand in hand. Met een aantal slimme oplossingen, verstandig gebruik van backlinks, bewuste keuze en opbouw van content, en uiteraard door up-to-date te blijven met google's algoritme kunnen wij uw vindbaarheid en conversie drastisch verbeteren.
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
