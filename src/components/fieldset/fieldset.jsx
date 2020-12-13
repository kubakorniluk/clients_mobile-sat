import React from 'react';
import PropTypes from 'prop-types';
import './fieldset.scss';
const Fieldset = ({
    title,
    className,
    children
}) => {
    return (
        <fieldset className={`fieldset ${className}`}>
            <legend className="fieldset__name">{title}</legend>
            {children}
        </fieldset>
    );
}
export default Fieldset;

Fieldset.defaultProps = {
    className: ''
}

Fieldset.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string
}