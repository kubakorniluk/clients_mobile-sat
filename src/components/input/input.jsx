import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';
const Input = ({
    name,
    type,
    placeholder,
    onChange,
    value,
    label,
    labelText
}) => {
    const input = (
        <input 
            name={name} 
            type={type}
            placeholder={placeholder}
            className={`input input--${type}`} 
            onChange={onChange}
            value={value}
            id={name}
        />
    )
    const inputWithLabel = (
        <>
            <label htmlFor={name} className="form__label">
                {labelText}
            </label>
            {input}
        </>
    )
    return label ? inputWithLabel : input;
}
export default Input;

Input.defaultProps = {
    label: false,
    labelText: '',
    placeholder: 'Wpisz tekst'
}

Input.propTypes = {
    label: PropTypes.bool,
    labelText: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'radio', 'checkbox']).isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.any
}