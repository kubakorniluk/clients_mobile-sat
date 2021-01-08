import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PriceFilter from './components/priceFilter/priceFilter';
import CheckboxFilter from './components/checkboxFilter/checkboxFilter';
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

class FilterPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: (window.innerWidth < 768) ? false : true,
            priceFrom: '',
            priceTo: '',
            allChecked: true, 
            categories: [
                { name: 'maseczki', checked: true },
                { name: 'opaski', checked: true },
                { name:'zegarki', checked: true }
            ]
        }
        this.togglePanel = this.togglePanel.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
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
    handleCheckbox(event) {
        const checked = event.target.checked;
        const name = event.target.name;
        this.setState(prevState => {
            let { allChecked, categories } = prevState;
            if(name === 'allChecked') {
                allChecked = checked
                categories = categories.map(item => ({ ...item, checked: checked }));
            } 
            else {
                categories = categories.map(item => 
                    (item.name === name) ? { ...item, checked: checked } : item
                );
                allChecked = categories.every(item => item.checked);
            }
            return { allChecked, categories }
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { 
            priceFrom, 
            priceTo, 
            allChecked, 
            categories 
        } = this.state;
        this.props.handleFilter({
            priceFrom: parseFloat(priceFrom), 
            priceTo: parseFloat(priceTo),
            allChecked: allChecked,
            categories: categories
        })
    }
    render() {
        return (
            <>
                <header className="filter-header">
                    <h1 className="filter-header__title">Filtry</h1>
                    <FontAwesomeIcon 
                        className='filter-header__toggle' 
                        icon={this.state.toggle ? faCaretUp : faCaretDown} 
                        onClick={this.togglePanel}
                    />
                </header>
                <form 
                    onSubmit={this.handleSubmit} 
                    className="filter-form" 
                    style={this.state.toggle ? showContent : hideContent}
                >
                    <PriceFilter 
                        handleInput={this.handleInput} 
                        priceFrom={this.state.priceFrom}
                        priceTo={this.state.priceTo}     
                    />
                    <CheckboxFilter 
                        handleCheckbox={this.handleCheckbox} 
                        allChecked={this.state.allChecked} 
                        categories={this.state.categories}
                    />
                    <button
                        className="filter-form__button"
                        type="submit"
                    >
                        Filtruj
                    </button>
                </form>
            </>
        );
    }
}
export default FilterPanel;

FilterPanel.propTypes = { handleFilter: PropTypes.func.isRequired }