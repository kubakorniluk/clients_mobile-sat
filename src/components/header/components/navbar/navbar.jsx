import React from 'react';
import './navbar.scss';
const Navbar = () => {
    const logo = <h1 className="navbar__logo">Mobile Sat</h1>
    const menuDesktop = (
        <ul className="menu">
            <li className="menu__item">Strona główna</li>
            <li className="menu__item">Nowości</li>
            <li className="menu__item">Produkty</li>
            <li className="menu__item">Kontakt</li>
        </ul>
    )
    return (
        <nav className="navbar">
            {logo}
            {menuDesktop}
        </nav>
    );
}
export default Navbar;