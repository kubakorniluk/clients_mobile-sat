import React from 'react';
import PropTypes from 'prop-types';
import './priceFilter.scss';
const PriceFilter = ({
    handleInput,
    priceFrom,
    priceTo
}) => {
    return ( 
        <fieldset className="fieldset">
            <legend className="fieldset__name">Cena</legend>
            <input 
                type="number"
                name="priceFrom"
                className="input--number" 
                value={priceFrom}
                onChange={handleInput} 
                placeholder="Od"    
            />
            <span className="filter-by-price__separator">-</span>
            <input
                type="number" 
                name="priceTo" 
                className="input--number"
                value={priceTo}
                onChange={handleInput} 
                placeholder="Do"
            />
        </fieldset>
    );
}
 
export default PriceFilter;

PriceFilter.propTypes = {
    handleInput: PropTypes.func.isRequired,
    priceFrom: PropTypes.string.isRequired,
    priceTo: PropTypes.string.isRequired
}