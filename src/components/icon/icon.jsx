import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as fa from '@fortawesome/free-solid-svg-icons';
import './icon.scss';

const Icon = ({
    name, 
    action
}) => {

    library.add(fa[name]);
    return (
        <i className="icon" onClick={action}>
            <FontAwesomeIcon icon={fa[name]} />
        </i>
    );
}
 
export default Icon;

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
}