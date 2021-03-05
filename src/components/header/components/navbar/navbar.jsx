import React, { Component, Suspense } from 'react';
import Menu from './components/menu/menu';
import './navbar.scss';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            screenWidth: window.innerWidth
        }
        this.handleResize = this.handleResize.bind(this);
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    handleResize() {
        this.setState({
            screenWidth: window.innerWidth
        })
    }
    render() {
        const MobileMenu = React.lazy(() => import(/* webpackPrefetch: 0 */'./components/mobileMenu/mobileMenu'));
        const mobile = (
            <Suspense fallback={null}>
                <MobileMenu />
            </Suspense>
        )
        const desktop = <Menu version='desktop'/>;
        const logo = <h1 className="navbar__logo">e-shop.net</h1>;
        return (
            <nav className="navbar">
                { logo }
                { (this.state.screenWidth > 768) ?  desktop : mobile }
            </nav>
        );
    }
}
export default Navbar;