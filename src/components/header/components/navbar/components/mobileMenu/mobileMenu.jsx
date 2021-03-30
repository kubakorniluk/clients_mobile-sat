import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars.js';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes.js';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt.js';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope.js';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone.js';
import Menu from '../menu/menu';
import './mobileMenu.scss';
const showSidebar = {
    width: '85%',
    display: 'flex'
    
} 
const hideSidebar = {
    width: '0%',
    display: 'none'
}
class MobileMenu extends Component {
    constructor() {
        super();
        this.state = {
            toggle: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState((prevState) => ({
            toggle: !prevState.toggle
        }));
    }
    render() {
        const dark = () => document.body.style.backgroundColor = 'rgba(26, 30, 40, 0.5)';
        const white = () => document.body.style.backgroundColor = 'rgba(255, 255, 255)';
        (this.state.toggle) ? dark() : white();
        return (
            <>
                <FontAwesomeIcon 
                    className='navbar__toggle' 
                    icon={faBars} 
                    onClick={this.handleClick} 
                />
                <aside className="sidebar" style={this.state.toggle ? showSidebar : hideSidebar}>   
                    <nav>
                        <div className="heading">
                            <h1 className="navbar__logo">easyonlineshop</h1>
                            <FontAwesomeIcon 
                                className='navbar__toggle' 
                                icon={faTimes} 
                                onClick={this.handleClick}
                            />
                        </div>
                        <Menu version='mobile' close={this.handleClick}/>
                    </nav>
                    <div className="sidebar-footer">
                        <a href="mailto:kontakt@easyonlineshop.pl" className="sidebar-footer__item">
                            <FontAwesomeIcon style={{marginRight: '3.5vw'}} icon={faEnvelope} />
                            kontakt@easyonlineshop.pl
                        </a>
                        <a href="tel:515 298 631" className="sidebar-footer__item">
                            <FontAwesomeIcon style={{marginRight: '3.5vw'}} icon={faPhone} />
                            (+48) 515 298 631
                        </a>
                        <a className="sidebar-footer__item">
                            <FontAwesomeIcon style={{marginRight: '3.5vw'}} icon={faMapMarkerAlt} />
                            Otwock, Polska
                        </a>
                    </div>
                </aside>
            </>
        )
    }
}
export default MobileMenu;
