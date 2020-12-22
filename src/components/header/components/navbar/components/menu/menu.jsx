import React from 'react';
import PropTypes from 'prop-types';
import './menu.scss';

const Menu = ({
    version, 
    cta
}) => {
    return (
        <ul className={`menu menu--${version}`}>
            <li className="menu__item">Strona główna</li>
            <li className="menu__item">Nowości</li>
            <li className="menu__item">Produkty</li>
            <li className={`menu__item ${cta ? 'menu__item--cta' : null}`}>Kontakt</li>
        </ul>
    )
}

export default Menu;

Menu.defaultProps = { cta: true }

Menu.propTypes = {
    version: PropTypes.string.isRequired,
    cta: PropTypes.bool
}
