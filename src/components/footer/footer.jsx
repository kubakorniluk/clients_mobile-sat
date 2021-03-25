import React from 'react';
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
            <a href="mailto:kontakt@easyonlineshop.pl" className="links__item links__item--contact">
                kontakt@easyonlineshop.pl
            </a>
            <a href="tel:515 298 631" className="links__item links__item--contact">
                (+48) 515 298 631
                </a>
            <a className="links__item links__item--contact">
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