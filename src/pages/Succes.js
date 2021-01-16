import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const Success = props => (
  <Layout>
  <Helmet>
  <title>Success Page</title>
<meta name="description" content="Success Page" />
  </Helmet>

  <div id="main" className="alt">
  <section id="one">
  <div className="inner has-text-centered">
  <header className="major">
<h1 className="bigtext">Bedankt, we komen zo snel mogelijk bij je terug.</h1>
<Link to="/" className="button primary center"> Klik hier om terug te gaan </Link>

  </header>
<span className="image main">
  </span>
</div>
</section>
</div>
</Layout>
);

export default Success;
