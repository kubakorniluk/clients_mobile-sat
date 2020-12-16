import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu/menu';
import Icon from '../../../../../icon/icon';
import './mobileMenu.scss';

const MobileMenu = ({
    toggle,
    action
}) => {

    return (
        <aside
            className="sidebar" 
            style={toggle}
        >   
            <Icon name='faTimes' action={action}/>
            <Menu screen='mobile' cta={false} />
        </aside>
    )
}
export default MobileMenu;

MobileMenu.propTypes = { toggle: PropTypes.any.isRequired }