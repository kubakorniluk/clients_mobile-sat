import React from 'react';
import PropTypes from 'prop-types';
import './menu.scss';

const Menu = ({
    screen, 
    cta
}) => {
    return (
        <ul className={`menu menu--${screen}`}>
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
    screen: PropTypes.string.isRequired,
    cta: PropTypes.bool
}
