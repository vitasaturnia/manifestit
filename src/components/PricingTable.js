import React from 'react';
import { Link } from 'gatsby';

import '../assets/sass/components/pricingtable.scss'

export default function PricingTable() {
    return (

<div className="pricingcontainer">
    <div className="grid">
   <div className = "columns is-multiline is-mobile" >
       <div className="column is-one-third">
        <div className="mycard basic" >
            <div className="cardcontainer">
            
        <div className="title" >
        <i className="fa fa-paper-plane" aria-hidden="true"> </i>
        </div>
        <div className = "price" >
        <h4>€750</h4 >
    </div>
    <div className = "option" >
        < ul >
        < li > < i className = "fa fa-check"
    aria-hidden="true"> </i>Op maat gemaakte website van max 4 paginas </li>
    <li > < i className="fa fa-check" aria-hidden="true" > < /i> Modern en responsive met Web 3.0 technologie </li>
    <li> <i className = "fa fa-times" aria-hidden="true"> </i> Geen SEO pakket inbegrepen</li >
    <li> <i className = "fa fa-times" aria-hidden="true" > < /i> Geen marketingpakket inbegrepen</li>
    </ul>
    </div>
    <Link to="/" className="button"> Kies </Link>
    </div>
    </div>
    </div>
    <div className="column is-one-third">
    <div className="mycard standard">
        <div className="container">
        <div className = "title" >
        <i className = "fa fa-plane" aria-hidden="true"> </i>
        </div>
        <div className= "price" >
        <h4> €1000</h4>
    </div>
    <div className="option"> <ul>
        <li> <i className = "fa fa-check" aria-hidden="true"> < /i> Op maat gemaakte website </li>
    <li> <i className="fa fa-check" aria-hidden="true"> </i> Modern en responsive met Web 3.0 technologie </li>
    <li> <i className = "fa fa-check" aria-hidden="true" > < /i> SEO starterspakket inbegrepen </li>
    <li> <i className = "fa fa-times" aria-hidden = "true" > < /i> Geen marketingpakket inbegrepen </li>
    </ul>
    </div>
    <Link to="/" className="button"> Kies </Link>
    </div>
    </div>
    </div>
    <div className="column is-one-third">
    <div className="mycard premium">
        <div className="container responsive">
        <div className = "title" >
        <i className = "fa fa-rocket" aria-hidden="true"> </i>
        </div>
        <div className="price">
        <h4> €1250</h4>
    </div>
    <div className="option">
        <ul>
        <li> <i className="fa fa-check" aria-hidden="true" > < /i> Op maat gemaakte website </li>
    <li> <i className="fa fa-check" aria-hidden="true" > < /i> Modern en responsive met Web 3.0 technologie</li>
    <li> <i className="fa fa-check" aria-hidden = "true" > < /i> SEO starterspakket inbegrepen </li>
    <li> <i className="fa fa-check" aria-hidden="true"> </i> Marketing starterspakket inbegrepen </li >
    </ul>
    </div>
    <Link to="/" className="button"> Kies </Link>
    </div>
    </div>
    </div>
    </div>
    </div>
</div>

);
}
