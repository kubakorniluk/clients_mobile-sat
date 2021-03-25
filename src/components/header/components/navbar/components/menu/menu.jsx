import React from 'react';
import PropTypes from 'prop-types';
import { reactScrollIntoView } from 'helpers/reactScrollIntoView';
import './menu.scss';

const Menu = ({ version, close }) => {
    const performFunctions = (scrollTo) => {
        reactScrollIntoView(scrollTo);
        close()
    }
    return (
        <ul className={`menu menu--${version}`}>
            <li className="menu__item" onClick={() => performFunctions('.header')}>Strona główna</li>
            <li className="menu__item" onClick={() => performFunctions('.main')}>Oferta</li>
            <li className="menu__item" onClick={() => performFunctions('.footer')}>Kontakt</li>
            <li className={(version == 'desktop') ? 'menu__item menu__item--cta' : 'menu__item'} onClick={() => performFunctions('.order')}>Koszyk</li>
        </ul>
    )
}

export default Menu;

Menu.propTypes = {
    version: PropTypes.string.isRequired
}
