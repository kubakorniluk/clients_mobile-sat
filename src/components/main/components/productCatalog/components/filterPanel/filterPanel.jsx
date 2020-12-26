import React, {Component} from 'react';
import Fieldset from '../../../../../fieldset/fieldset';
import Input from '../../../../../input/input';
import Button from '../../../../../button/button';
import Icon from '../../../../../icon/icon';
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
            toggle: true,
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
        this.renderCategories = this.renderCategories.bind(this);
        
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
        const { priceFrom, priceTo, allChecked, categories } = this.state;
        this.props.handleFilter({
            priceFrom: parseFloat(priceFrom), 
            priceTo: parseFloat(priceTo),
            allChecked: allChecked,
            categories: categories
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
    renderCategories() {
        return (
            this.state.categories.map(
                (category, index) => (
                    <Input
                        key={index}
                        label={true}
                        labelText={category.name[0].toUpperCase() + category.name.substr(1, category.name.length)}
                        name={category.name}
                        type='checkbox'
                        checked={category.checked}
                        onChange={this.handleCheckbox}  
                    />
                )
            )
        )
    }
    render() {

        return (
            <>
                <div className="header">
                    <h1 className="header__title">Filtry</h1>
                    <Icon 
                        className='header__toggle' 
                        name={this.state.toggle ? 'faCaretUp' : 'faCaretDown'} 
                        action={this.togglePanel}
                    />
                </div>
                <form onSubmit={this.handleSubmit} className="content" style={this.state.toggle ? showContent : hideContent}>
                    <Fieldset title='Cena'>
                        <Input 
                            type='number'
                            name='priceFrom' 
                            value={this.state.priceFrom}
                            onChange={this.handleInput} 
                            placeholder='Od'    
                        />
                        <span className="filter-by-price__separator">-</span>
                        <Input
                            type='number' 
                            name='priceTo' 
                            value={this.state.priceTo}
                            onChange={this.handleInput} 
                            placeholder='Do'
                        />
                    </Fieldset>
                    <Fieldset title='Kategorie' className='filter-by-category'>
                        <Input
                            label={true}
                            labelText='Wszystkie'
                            type='checkbox'
                            name='allChecked'
                            checked={this.state.allChecked}
                            onChange={this.handleCheckbox} 
                        />
                        {this.renderCategories()}
                    </Fieldset>
                    <Button 
                        type='submit' 
                        text='Filtruj' 
                    />
                </form>
            </>
        );
    }
}
export default FilterPanel;