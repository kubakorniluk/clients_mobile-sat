import React, { Component, Suspense } from 'react';
import Menu from './components/menu/menu';
import Icon from '../../../icon/icon'
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
        const MobileMenu = React.lazy(() => import('./components/mobileMenu/mobileMenu'));
        const mobile = (
            <>
                <Icon name='faBars' action={this.handleClick} />
                <Suspense fallback={null}>
                    <MobileMenu toggle={this.state.toggle ? showSidebar : hideSidebar}/>
                </Suspense>
            </>
        )
        const desktop = <Menu screen='desktop' cta={true} />
        return (
            <nav className="navbar">
                <h1 className="navbar__logo">Mobile Sat</h1>
                { (this.state.screenWidth < 768) ?  desktop : mobile }
            </nav>
        );
    }
}
export default Navbar;