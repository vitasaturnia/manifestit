import React from 'react';

import Layout from '../components/Layout';
import pic1 from '../assets/images/01.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner has-text-centered">
        <h1>Webdevelopment</h1>
        <span className="image main">
          <img src={pic1} alt="" />
        </span>
        <p>
          Webdevelopment is een kunst, geen website is het zelfde. Maar websies moeten ook snel zijn, functioneel, gebruiksvriendelijk en intuïtief. Een website is in deze moderne tijd hetgeen wat u als bedrijf of ondernemer op de kaart zet, maar ook hetgeen wat u verbind met de klant. Uw website is u online visitekaartje, en daarom moet die perfect zijn.
        </p>
        <p>
         Om elke website perfect te kunnen maken, begint het voor ons bij het uitkiezen van de juiste gereedschappen. Als basis gebruiken wij Gatsby of React voor het bouwen van websites, dit omdat dit zorgt voor snelle, moderne, en functionele websites, en zijn de mogelijkheden vaak bijna eindeloos. Vereist de website toch een andere aanpak? Wij werken ook graag met HTML5, CSS3, Javascript, PHP, SQL, NodeJS, React, en Django. Ook al staan we voor op maat gemaakte websites, zijn we ook bekend met Wordpress development, en Wordpress theme development.
        </p>
        <p>
          Bij het maken van een website luisteren wij als eerst naar de klant, wat zijn de eisen, de gewenste functionaliteit en uitstraling? Vervolgens zetten wij alles op papier, en maken we een schets zodat de klant al een beetje een idee krijgt hoe het er uit komt te zien. Is alles naar wens? Of heeft u zich totaal verkeken en wilt u het toch graag anders zien? Wij blijven gedurende het hele proces met u in contact zodat de website écht naar wens word gemaakt.
        </p>
       
      </div>
    </div>
  </Layout>
);

export default IndexPage;
