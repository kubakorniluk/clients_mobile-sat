import React from 'react';
import PropTypes from 'prop-types';
import { reactScrollIntoView } from 'helpers/reactScrollIntoView';
import './menu.scss';

const Menu = ({ version }) => {
    return (
        <ul className={`menu menu--${version}`}>
            <li className="menu__item" onClick={() => reactScrollIntoView('.header')}>Strona główna</li>
            <li className="menu__item" onClick={() => reactScrollIntoView('.product-catalog')}>Oferta</li>
            <li className="menu__item" onClick={() => reactScrollIntoView()}>Kontakt</li>
            <li className={(version == 'desktop') ? 'menu__item menu__item--cta' : 'menu__item'} onClick={() => reactScrollIntoView()}>Zamów</li>
        </ul>
    )
}

export default Menu;

Menu.propTypes = {
    version: PropTypes.string.isRequired
}
