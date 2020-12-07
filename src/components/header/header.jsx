import React from 'react';
import Navbar from './navbar/navbar' 
import './header.scss';
function Header() {
    return (
        <header className="header">
            <Navbar />
            <section className="gallery">
                <div className="overlay">
                    <article className="text">
                        <h1 className="text__title">Lorem ipsum</h1>
                        <p className="text__subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur expedita quis assumenda neque sapiente iusto vitae voluptatum non. Nulla, a.</p>
                    </article>
                </div>
            </section>
        </header>
    );
}
export default Header;