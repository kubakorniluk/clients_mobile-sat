import React, { Component, Suspense } from 'react';
import Button from '../../../button/button';
import './navbar.scss';

const showSidebar = {
    display: 'flex'
} 
const hideSidebar = {
    display: 'none'
}

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            screenWidth: screen.width,
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
        const Menu = React.lazy(() => import('./components/menu/menu'));
        const menuMobile = (
            <>
                <Button 
                    type='button'
                    text='&#9776;'
                    className=''
                    onClick={this.handleClick}
                />
                <Suspense fallback={null}>
                    <Menu 
                        style={this.state.toggle ? showSidebar : hideSidebar} 
                        screen='mobile' 
                        cta={false} 
                    />
                </Suspense>
            </>
        )
        return (
            <nav className="navbar">
                <h1 className="navbar__logo">Mobile Sat</h1>
                { (this.state.screenWidth < 768) ? <Menu screen='desktop' cta={true} /> : menuMobile }
            </nav>
        );
    }
}
export default Navbar;