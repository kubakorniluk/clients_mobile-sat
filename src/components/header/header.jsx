import React from 'react';
import Navbar from './components/navbar/navbar';
import Gallery from './components/gallery/gallery';
import './header.scss';
const Header = () => {
    return (
        <header className="header">
            <Navbar />
            <Gallery />
        </header>
    );
}
export default Header;