import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import Menu from '../menu/menu';
import './mobileMenu.scss';
const showSidebar = {
    width: '75%',
    display: 'block'
} 
const hideSidebar = {
    width: 0,
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
        }))
    }
    render() {
        return (
            <>
                <FontAwesomeIcon 
                    className='navbar__toggle' 
                    icon={faBars} 
                    onClick={this.handleClick} 
                />
                <aside className="sidebar" style={this.state.toggle ? showSidebar : hideSidebar}>   
                    <div className="heading">
                        <h2 className="heading__title">Menu</h2>
                        <FontAwesomeIcon 
                            className='navbar__toggle' 
                            icon={faTimes} 
                            onClick={this.handleClick}
                        />
                    </div>
                    <Menu version='mobile'/>
                </aside>
            </>
        )
    }
}
export default MobileMenu;
