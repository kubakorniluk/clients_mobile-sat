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
            toggle: (window.innerWidth >= 768) ? true : false,
            priceFrom: '',
            priceTo: ''
        }
        this.togglePanel = this.togglePanel.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.liftUp = this.liftUp.bind(this);    
    }
    togglePanel() {
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }))
    }
    handleInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        const { priceFrom, priceTo } = this.state;
        this.props.handleFilters({
            priceFrom: parseFloat(priceFrom), 
            priceTo: parseFloat(priceTo)
        })
    }
    liftUp(data) {
        this.props.setCurrentCategory(data)
    }
    render() {
        const renderHeader = (title) => {
            return (
                <header className="filter-header">
                    <h1 className="filter-header__title">{title}</h1>
                    <FontAwesomeIcon 
                        className='filter-header__toggle' 
                        icon={this.state.toggle ? faCaretUp : faCaretDown} 
                        onClick={this.togglePanel}
                    />
                </header>
            )
        }
        return (
            <>
                <section className="filter-wrapper">
                    {renderHeader('Kategorie')}
                    <div
                        onSubmit={this.handleSubmit} 
                        className="filter-form" 
                        style={this.state.toggle ? showContent : hideContent}
                    >
                        <CategoriesFilter
                            data={this.props.data}
                            liftUp={this.liftUp}
                        />
                    </div>
                </section>
                <section className="filter-wrapper" style={{paddingTop: '1em'}}>
                    {renderHeader('Filtry')}
                    <div  
                        className="filter-form" 
                        style={this.state.toggle ? showContent : hideContent}
                    >
                        <PriceFilter 
                            handleInput={this.handleInput} 
                            priceFrom={this.state.priceFrom}
                            priceTo={this.state.priceTo}     
                        />
                        <button
                            onClick={this.handleSubmit}
                            className="filter-form__button"
                            type="button"
                        >
                            Filtruj
                        </button>
                    </div>
                </section>
            </>
        );
    }
}
export default FilterPanel;

FilterPanel.propTypes = { 
    handleFilters: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        })
    ).isRequired 

}