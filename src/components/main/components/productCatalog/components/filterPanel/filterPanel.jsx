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
            <aside className="filter-panel">
                <div className="header">
                    <h1 className="header__title">Filtry</h1>
                    <Icon name={this.state.toggle ? 'faCaretUp' : 'faCaretDown'} action={this.togglePanel}/>
                </div>
                {
                    <form 
                        className="content" 
                        style={this.state.toggle ? showContent : hideContent}
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
                        <Fieldset title='Kategorie' className='filter-by-category'>
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
            </aside>
        );
    }
}
export default FilterPanel;