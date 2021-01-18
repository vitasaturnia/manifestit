import React from 'react';
import ContactForm from './ContactForm';
import { FaEnvelope } from 'react-icons/fa';
import Newsletter from './Newsletter';

export default function Footer() {
  return (
    <footer id="footer">

      <div className="inner">

<ContactForm/>


<Newsletter/> 



      </div>


    </footer>
  );
}
