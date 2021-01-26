import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PriceFilter from './components/priceFilter/priceFilter';
import CategoriesFilter from './components/categoriesFilter/categoriesFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons/faCaretUp';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import './filterPanel.scss';

const showContent = {
    display: 'flex'
} 
const hideContent = {
    display: 'none'
}

class FilterPanel extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            toggleCategories: (window.innerWidth >= 768) ? true : false,
            toggleFilters: (window.innerWidth >= 768) ? true : false,
            priceFrom: '',
            priceTo: ''
        }
        this.toggleCategories = this.toggleCategories.bind(this);
        this.toggleFilters = this.toggleFilters.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    toggleCategories() {
        this.setState(prevState => ({
            toggleCategories: !prevState.toggleCategories
        }));
    }
    toggleFilters() {
        this.setState(prevState => ({
            toggleFilters: !prevState.toggleFilters
        }));
    }
    handleInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event) {
        if (event) {
            event.preventDefault()
        }
        const { priceFrom, priceTo } = this.state;
        this.props.handleFilters({
            priceFrom: parseFloat(priceFrom), 
            priceTo: parseFloat(priceTo)
        });
    }
    handleReset() {
        this.setState({
            priceFrom: '',
            priceTo: ''
        }, () => this.handleSubmit());
    }
    render() {
        const renderHeader = (title, toggleFunction) => {
            return (
                <header className="filter-header">
                    <h1 className="filter-header__title">{title}</h1>
                    <FontAwesomeIcon 
                        className='filter-header__toggle' 
                        icon={(this.state.toggleCategories && this.state.toggleFilters) ? faCaretUp : faCaretDown} 
                        onClick={toggleFunction}
                    />
                </header>
            );
        }
        const {
            data,
            filterQuery,
            setCurrentCategory
        } = this.props;
        const {
            toggleCategories,
            toggleFilters,
            priceFrom,
            priceTo
        } = this.state
        return (
            <>
                <div className="filter-wrapper">
                    {renderHeader('Kategorie', this.toggleCategories)}
                    <div
                        onSubmit={this.handleSubmit} 
                        className="filter-form" 
                        style={toggleCategories ? showContent : hideContent}
                    >
                        <CategoriesFilter
                            data={data}
                            filterQuery={filterQuery}
                            setCurrentCategory={(data) => setCurrentCategory(data)}
                        />
                    </div>
                </div>
                <div className="filter-wrapper">
                    {renderHeader('Filtry', this.toggleFilters)}
                    <form  
                        className="filter-form" 
                        style={toggleFilters ? showContent : hideContent}
                    >
                        <PriceFilter 
                            handleInput={this.handleInput} 
                            priceFrom={priceFrom}
                            priceTo={priceTo}     
                        />
                        <div className="button-group">
                            <button
                                onClick={this.handleSubmit}
                                className="filter-form__button"
                                type="submit"
                            >
                                Filtruj
                            </button>
                            <button
                                className="filter-form__button"
                                onClick={this.handleReset}
                                type="reset"
                            >
                                Resetuj
                            </button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}
export default FilterPanel;

FilterPanel.propTypes = { 
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        })
    ).isRequired,
    filterQuery: PropTypes.func.isRequired,
    setCurrentCategory: PropTypes.func.isRequired, 
    handleFilters: PropTypes.func.isRequired
}