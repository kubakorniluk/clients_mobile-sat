import React, {Component} from 'react';
import Fieldset from '../../../../../fieldset/fieldset';
import Input from '../../../../../input/input' ;
import Button from '../../../../../button/button';
import './filterPanel.scss';

const contentStyleShow = {
    display: 'flex'
} 
const contentStyleHide = {
    display: 'none'
}

class FilterPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true,
            priceFrom: '',
            priceTo: ''
        }
        this.togglePanel = this.togglePanel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    togglePanel() {
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }))
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        alert(`Od ${this.state.priceFrom} do ${this.state.priceTo}`);
    }
    render() {
        const categories = [...new Set(this.props.categories)];
        return (
            <div className="filter-panel">
                <div className="header">
                    <h1 className="header__title">Filtry</h1>
                    <Button 
                        type='button' 
                        text={this.state.toggle ? <span>&#11165;</span> : <span>&#11167;</span>}
                        className='header__toggle'
                        onClick={this.togglePanel}
                    />
                </div>
                {
                    <form 
                        className="content" 
                        style={this.state.toggle ? contentStyleShow : contentStyleHide}
                        onSubmit={this.handleSubmit}
                    >
                        <Fieldset title='Cena'>
                            <Input 
                                type='number'
                                name='priceFrom' 
                                value={this.state.priceFrom} 
                                onChange={this.handleChange} 
                                placeholder='Od'
                            />
                            <span className="filter-by-price__separator">-</span>
                            <Input 
                                type='number' 
                                name='priceTo' 
                                value={this.state.priceTo} 
                                onChange={this.handleChange} 
                                placeholder='Do'
                            />
                        </Fieldset>
                        <Fieldset title='Kategorie'>
                            <Input
                                label={true}
                                labelText='Wszystkie'
                                type='checkbox'
                                name='categoriesAll'
                                 
                            />
                            {categories.map(
                                (category, index) => {
                                    return (
                                        <Input
                                            key={index}
                                            label={true}
                                            labelText={category}
                                            name={category}
                                            type='checkbox'
                                        />
                                    )
                                }
                            )}
                        </Fieldset>
                        <Button type='submit' text='Filtruj' />
                    </form>
                }
            </div>
        );
    }
}
export default FilterPanel;