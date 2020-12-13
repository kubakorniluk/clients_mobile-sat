import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
const Button = ({
    type,
    text,
    className,
    onClick
}) => {
    return (
        <button 
            type={type} 
            className={`button button--${type} ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
export default Button;

Button.defaultProps = {
    className: '',
    onClick: null
}

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
    text: PropTypes.any.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func
}