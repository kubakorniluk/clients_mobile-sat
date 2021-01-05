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
                    <label className="filter-label" htmlFor={category.name} key={index}>
                        <input
                            id={category.name}
                            name={category.name}
                            type="checkbox"
                            className="filter-input filter-input--checkbox"
                            checked={category.checked}
                            onChange={handleCheckbox}  
                        />
                        <span className="filter-label__title">{category.name[0].toUpperCase() + category.name.substr(1, category.name.length)}</span>
                    </label>
                )
            )
        )
    }
    return ( 
        <fieldset className="filter-fieldset filter-by-category">
            <legend className="filter-fieldset__title">Kategorie</legend>
            <label className="filter-label" htmlFor="allChecked">
                <input
                    id="allChecked"
                    name="allChecked"
                    type="checkbox"
                    className="filter-input filter-input--checkbox"
                    checked={allChecked}
                    onChange={handleCheckbox} 
                />
                <span className="filter-label__title">Wszystkie</span>
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