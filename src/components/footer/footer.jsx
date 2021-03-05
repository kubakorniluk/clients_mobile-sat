import React from 'react';
import Copyright from './components/copyright/copyright';
import { reactScrollIntoView } from 'helpers/reactScrollIntoView';
import './footer.scss';
const Footer = () => {
    const about = (
        <section className="about">
            <h1 className="navbar__logo">e-shop.net</h1>
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
                <h2 className="links__heading">Masz pytania?</h2>
                <a href="mailto:" className="links__item">contact@example.com</a>
                <a href="tel:" className="links__item">(+48) 123 456 789</a>
                <a className="links__item">Otwock, Polska</a>
            </div>
    )
    return ( 
        <footer className="footer">
            <div className="info">
                {about}
                {navbar}
                {contact}
            </div>
            <Copyright />
        </footer>
    );
}
 
export default Footer;