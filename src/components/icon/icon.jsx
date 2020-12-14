import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as fas from '@fortawesome/free-solid-svg-icons';
import * as fab from '@fortawesome/free-brands-svg-icons';
import './icon.scss';

const Icon = ({
    name, 
    action
}) => {

    library.add(fas[name]);
    return (
        <i className="icon" onClick={action}>
            <FontAwesomeIcon icon={fas[name]} />
        </i>
    );
}
 
export default Icon;

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
}