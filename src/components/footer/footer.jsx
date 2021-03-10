import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt.js';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope.js';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone.js';
import Copyright from './components/copyright/copyright';
import { reactScrollIntoView } from 'helpers/reactScrollIntoView';
import './footer.scss';
const Footer = () => {
    const about = (
        <section className="about">
            <h2 className="about__heading">O nas</h2>
            <p className="about__text">Firma Mobile Sat zajmuje się importem min. artykułów higienicznych, medycznych, elektroniki i wielu innych. Zapraszamy do zapoznania się z naszą ofertą!</p>
        </section>
    );
    const navbar = (
        <div className="links">
            <h2 className="links__heading">Pomocne linki</h2>
            <a className="links__item links__item--nav" onClick={() => reactScrollIntoView('.header')}>Strona główna</a>
            <a className="links__item links__item--nav" onClick={() => reactScrollIntoView('.main')}>Oferta</a>
            <a className="links__item links__item--nav" onClick={() => reactScrollIntoView('.footer')}>Kontakt</a>
            <a className="links__item links__item--nav">Zamów</a>
        </div>
    )
    const contact = (
        <div className="links">
            <h2 className="links__heading">Masz pytanie?</h2>
            <a href="mailto:" className="links__item links__item--contact">
                {/* <FontAwesomeIcon style={{marginRight: '.75vw'}} icon={faEnvelope} /> */}
                contact@example.com
            </a>
            <a href="tel:" className="links__item links__item--contact">
                {/* <FontAwesomeIcon style={{marginRight: '.75vw'}} icon={faPhone} /> */}
                (+48) 123 456 789
                </a>
            <a className="links__item links__item--contact">
                {/* <FontAwesomeIcon style={{marginRight: '.75vw'}} icon={faMapMarkerAlt} /> */}
                Otwock, Polska
            </a>
        </div>
    )
    return ( 
        <footer className="footer">
            <div className="content">
                {about}
                <div className="info">
                    {navbar}
                    {contact}
                </div>
            </div>
            <Copyright />
        </footer>
    );
}
 
export default Footer;