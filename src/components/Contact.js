import React, { Component } from 'react';
import '../styles/Contact.css';
import apollo from '../utils/apollo_phone.jpg';

class Contact extends Component {
  render() {
    return(
      <div id='contact' className="contact-container">
        {/* <section id='contact'>hola</section> */}
        <div className="contact-img">
          <img src={ apollo } alt="Apollo with phone"/>
        </div>

        <div className="contact-text">
          <h3>Say Hello</h3>
          <p>If you’re interested in talking more, I’d love to hear from you. Feel free to contact me at</p>
          <h4><a href="mailto:cesarm.sanchezo@gmail.com">cesarm.sanchezo@gmail.com</a></h4>
          <p>or <a href="https://www.linkedin.com/in/cesarsanchez0ch04/" target="_blank" rel="noopener noreferrer">LinkedIn</a>. Mucho gusto!</p>
        </div>
      </div>
    );
  }
}

export default Contact
