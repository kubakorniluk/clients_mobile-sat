import React from 'react';
import PropTypes from 'prop-types';
import './menu.scss';

const Menu = ({ version }) => {
    return (
        <ul className={`menu menu--${version}`}>
            <li className="menu__item">Strona główna</li>
            <li className="menu__item">Nowości</li>
            <li className="menu__item">Produkty</li>
            <li className="menu__item">Kontakt</li>
        </ul>
    )
}

export default Menu;

Menu.propTypes = {
    version: PropTypes.string.isRequired
}
