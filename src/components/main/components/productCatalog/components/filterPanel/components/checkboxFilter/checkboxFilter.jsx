import React from 'react';
import PropTypes from 'prop-types';
import './checkboxFilter.scss';
const CheckboxFilter = ({
    handleCheckbox,
    allChecked,
    categories
}) => {
    const renderCategories = () => {
        return (
            categories.map(
                (category, index) => (
                    <label className="form__label" htmlFor={category.name} key={index}>
                        <input
                            id={category.name}
                            name={category.name}
                            type="checkbox"
                            className="input--checkbox"
                            checked={category.checked}
                            onChange={handleCheckbox}  
                        />
                        <span>{category.name[0].toUpperCase() + category.name.substr(1, category.name.length)}</span>
                    </label>
                )
            )
        )
    }
    return ( 
        <fieldset className='fieldset filter-by-category'>
            <legend className="fieldset__name">Kategorie</legend>
            <label className="form__label" htmlFor="allChecked">
                <input
                    id='allChecked'
                    name='allChecked'
                    type='checkbox'
                    className="input--checkbox"
                    checked={allChecked}
                    onChange={handleCheckbox} 
                />
                <span>Wszystkie</span>
            </label>
            {renderCategories()}
        </fieldset>
    );
}
 
export default CheckboxFilter;

CheckboxFilter.propTypes = {
    handleCheckbox: PropTypes.func.isRequired,
    allChecked: PropTypes.bool.isRequired,
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            checked: PropTypes.bool.isRequired
        })
    ).isRequired
}