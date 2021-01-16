import React from 'react';
import '../assets/sass/main.scss';
import { Link } from 'gatsby';
import logo from '../assets/img/website-icon.svg';


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }



  render() {
  return (

    <>


<section>
<div className="container">
  <div className="logo has-text-centered">

<Link to="/" className="logo has-text-centered">
            <span className="symbol">
              <img src={logo} className="logoimage" alt="Manifest IT" />
            </span>
          </Link>
          </div>
          </div>
</section>

  <nav className="navbar" role="navigation" aria-label="main-navigation">
        <div className="container">

          
         
            <div
            className="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
        <div className="navbar-links has-text-centered">
        <Link className="navbar-item" to="/">Home</Link>

        <Link className="navbar-item" to="/#services">Services</Link>

        <Link className="navbar-item" to="/#prijzen">Prijzen</Link>


    <Link className="navbar-item" to="/#footer">Contact</Link>


        </div>
</div>
</div>
        </nav>


</>

        )
      }
    }
    
    export default Navbar