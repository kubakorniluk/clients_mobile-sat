import React from 'react';
import PropTypes from 'prop-types';
import './menu.scss';

const Menu = ({
    screen, 
    cta,
    style
}) => {
    const menu = (
        <ul className={`menu menu--${screen}`}>
            <li className="menu__item">Strona główna</li>
            <li className="menu__item">Nowości</li>
            <li className="menu__item">Produkty</li>
            <li className={`menu__item ${cta ? 'menu__item--cta' : null}`}>Kontakt</li>
        </ul>
    )
    if(screen === 'mobile') {
        return (
            <aside
                className="sidebar" 
                style={ style }
            >
                {menu}
            </aside>
        )
    } 
    return menu;
}

export default Menu;

Menu.defaultProps = {
    style: ''
}

Menu.propTypes = {
    screen: PropTypes.string.isRequired,
    cta: PropTypes.bool.isRequired,
    style: PropTypes.any
}
