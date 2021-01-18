import React from 'react';
import config from '../../config';

export default function Newsletter() {
  return (
    
   
<section>
<div className="hero is-grey is-medium has-text-centered">
<div className="container">

  <h2>Nieuwsbrief</h2>
  <p class="subtitle is-4 has-text-grey-light">Blijf op de hoogte van alle nieuwtjes en aanbiedingen!</p>
</div>
</div>

  <div className="columns is-vcentered has-text-centered">
  
<form action="https://mail.jgthms.com/subscribe" method="POST" accept-charset="utf-8" className="has-text-centered">
  <div class="field is-grouped">
    <div class="control has-icons-left is-expanded">
      <input type="email" value="" name="email" class="input is-medium is-flat" placeholder="email address" required=""/>
      <span class="icon is-small is-left">
      <i class="fa fa-envelope svg-inline--fa"></i>
      </span>


    </div>

    <div class="control">
      <div class="is-hidden">
        <input type="text" name="hp" id="hp"/>
      </div>
      <input type="hidden" name="list" value="So5UY3O9gHJkq892bn763Tyf4A"/>
      <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button is-white is-outlined"/>

    </div>
  </div>
</form>



</div>

<div className="columns has-text-centered ">

<div className="column has-text-centered ">
<h2>Social media</h2>
<p className="subtitle is-4 has-text-grey-light">Volg ons op social media!</p>


<div className="container">

          <ul className="icons is-size-2">
            {config.socialLinks.map(social => {
              const { icon, name, url } = social;
              return (
                <li key={url}>
                  <a href={url} className={`icon ${icon}`}>
                    <span className="label">{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
</div>
</div>
</div>

</section>
  );
}
