import React from 'react';
import PropTypes from 'prop-types';
import { reactScrollIntoView } from 'helpers/reactScrollIntoView';
import './menu.scss';

const Menu = ({ version }) => {
    return (
        <ul className={`menu menu--${version}`}>
            <li className="menu__item" onClick={() => reactScrollIntoView('.header')}>Strona główna</li>
            <li className="menu__item" onClick={() => reactScrollIntoView('.main')}>Oferta</li>
            <li className="menu__item" onClick={() => reactScrollIntoView('.footer')}>Kontakt</li>
            <li className={(version == 'desktop') ? 'menu__item menu__item--cta' : 'menu__item'} onClick={() => reactScrollIntoView('.order')}>Koszyk</li>
        </ul>
    )
}

export default Menu;

Menu.propTypes = {
    version: PropTypes.string.isRequired
}
