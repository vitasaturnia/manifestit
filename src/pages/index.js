import React from 'react'
import Layout from '../components/Layout';
import PricingTable from "../components/PricingTable";
import { BreakpointProvider, Breakpoint } from 'react-socks'
import pic1 from '../assets/images/01.jpg';
import pic2 from '../assets/images/02.jpg';
import pic3 from '../assets/images/03.jpg';
import pic4 from '../assets/images/04.jpg';
import pic5 from '../assets/images/05.jpg';
import pic6 from '../assets/images/06.jpg';


import { Link } from 'gatsby';

const IndexPage = () => (
<BreakpointProvider>
  <Layout>
    <div id="main">
      <div className="inner has-text-centered">
        <header>
          <h1>
            Manifest IT, de plek waar dromen werkelijkheid worden.
            <br />
          </h1>
          <p>

    In dit digitale tijdperk waarin we leven zijn de mogelijkheden letterlijk eindeloos, en is de drempel naar succes lager dan ooit tevoren. Heeft u het gouden idee? Maar niet de technische kennis om dit uit te voeren op de manier die uw idee verdient? Dan heeft u gevonden waarnaar u zocht.
Ons team van experts bestaat uit ervaren specialisten op het gebied van webdevelopment, design, marketing en SEO.
Wij bieden een volledige realisatie van uw project, van het ontwikkelen van uw droomwebsite, optimaliseren van uw website voor zoekmachines, het opzetten van de juiste marketing campagnes, tot aan de branding en het design. Ook bieden wij hosting en website beheer aan in gemakkelijke maandelijkse paketten.
</p>
</header>
<div className="bigtext"> <h1 id="services">Onze services</h1> </div>

    <section className="tiles" >
          <article className="style1">
            <span className="image">
              <img src={pic1} alt="" />
            </span>
            <Link to="/Webdevelopment">
              <h2>Webdevelopment</h2>
              <div className="content">
                <p>
                  Wij coderen vanuit scratch de mooiste websites met web 3.0 technologie, precies hoe u het wilt.
                </p>
              </div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
              <img src={pic2} alt="" />
            </span>
            <Link to="/Websitebeheer">
              <h2>Website beheer</h2>
              <div className="content">
                <p>Voor als u zich gewoon wilt u zich focussen op waar u goed bent, en het technische gedeelte aan ons wilt overlaten.</p>
              </div>
            </Link>
          </article>
        
          <article className="style3">
            <span className="image">
              <img src={pic3} alt="" />
            </span>
            <Link to="/Marketing">
              <h2>Marketing</h2>
              <div className="content">
                <p>
                  Of het nou gaat om social media marketing, online marketing, printmarketing, of slim adverteren. Wij zorgen dat uw website of product juist word gepresenteerd aan elke (potentiele) klant.
                </p>
              </div>
            </Link>
          </article>
          <article className="style4">
            <span className="image">
              <img src={pic4} alt="" />
            </span>
            <Link to="/SEO">
              <h2>SEO</h2>
              <div className="content">
                <p>
                  Search Engine Optimalisation, of SEO is natuurlijk cruciaal, wij gebruiken de nieuwste trucjes om u website bovenaan de zoekresultaten te krijgen.
                </p>
              </div>
            </Link>
          </article>
          <article className="style5">
          <span className="image">
            <img src={pic5} alt="" />
          </span>
          <Link to="/Branding">
            <h2>Branding</h2>
            <div className="content">
              <p>
                De branding of huisstijl van uw website of product is een extreem belangrijk aspect van de marketing. Wij halen alles uit de kast om uw klanten de juiste indruk te geven, van psychologie tot aan uitmuntend designwerk.
              </p>
            </div>
          </Link>
        </article>
         
          <article className="style6">
            <span className="image">
              <img src={pic6} alt="" />
            </span>
            <Link to="/Hardware">
              <h2>Hardware en tech support</h2>
              <div className="content">
                <p>
Technologie stroomt door ons bloed: reparatie van uw computer of mobiele telefoon, het aanleggen van een netwerk, het installeren van beveiligingscameras, wij kunnen altijd wel even tijd maken om u te helpen.                </p>
              </div>
            </Link>
          </article>

</section>
      </div>

<Breakpoint large up>
<div className="bigtext">
    <h1 id="prijzen">Prijzen</h1>
<PricingTable/>
</div>
</Breakpoint>

    </div>
  </Layout>
  </BreakpointProvider>

);

export default IndexPage;
