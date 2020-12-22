import React, { Component } from 'react';
import Menu from '../menu/menu';
import Icon from '../../../../../icon/icon';
import './mobileMenu.scss';

const showSidebar = {
    width: '33.33%',
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
                <Icon 
                    className='navbar__toggle' 
                    name='faBars' 
                    action={this.handleClick} 
                />
                <aside className="sidebar" style={this.state.toggle ? showSidebar : hideSidebar}>   
                    <div className="heading">
                        <h1 className="heading__title">Menu</h1>
                        <Icon 
                            className='navbar__toggle' 
                            name='faTimes' 
                            action={this.handleClick}
                        />
                    </div>
                    <Menu version='mobile' cta={false}/>
                </aside>
            </>
        )
    }
}
export default MobileMenu;
