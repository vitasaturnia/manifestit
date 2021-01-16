import React from 'react';
export default function ContactForm() {
  return (
    <section>
      <h2>Neem contact op</h2>
        <p>Meer informatie? Vul het onderstaande formulier in en wij nemen zo spoedig mogelijk contact met u op. U kunt ons ook een appje sturen via het whatsapp icoontje rechts!</p>
    <form name="contact" method="post" action="/Succes"data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div className="fields">
          <div className="field half">
            <input type="text" name="name" id="name" placeholder="Naam" />
          </div>
          <div className="field half">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="field">
            <textarea name="message" id="message" placeholder="Bericht" />
          </div>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Verstuur" className="primary" />
          </li>
        </ul>
      </form>
    </section>
  );
}
