import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu/menu';
import './mobileMenu.scss';

const MobileMenu = ({toggle}) => {

    return (
        <aside
            className="sidebar" 
            style={toggle}
        >
            <Menu screen='mobile' cta={false} />
        </aside>
    )
}
export default MobileMenu;

MobileMenu.propTypes = {
    toggle: PropTypes.any.isRequired
}