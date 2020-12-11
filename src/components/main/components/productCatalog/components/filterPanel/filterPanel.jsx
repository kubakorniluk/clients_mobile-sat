import React from 'react';
import './filterPanel.scss';
class FilterPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true,
            priceFrom: "",
            priceTo: ""
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
        this.props.changeState(a => a >= parseInt(this.state.priceFrom))
    }
    render() {
        const contentStyleShow = {
            display: 'flex'
        } 
        const contentStyleHide = {
            display: 'none'
        }
        const categories = [...new Set(this.props.categories)];
        return (
            <div className="filter-panel">
                <div className="header">
                    <h1 className="header__title">Filtry</h1>
                    <button 
                        className="header__toggle"
                        onClick={this.togglePanel}
                    >{this.state.toggle ? <span>&#11165;</span> : <span>&#11167;</span>}</button>
                </div>
                {
                    <form 
                        className="content" 
                        style={
                            this.state.toggle ? contentStyleShow : contentStyleHide
                        }
                        onSubmit={this.handleSubmit}
                    >
                        <fieldset className="filter-by-price">
                            <legend className="fieldset__name">Cena</legend>
                            <input 
                                type="number"
                                name="priceFrom"
                                placeholder="Od" 
                                className="filter-by-price__input"
                                value={this.state.priceFrom}
                                onChange={this.handleChange}
                            />
                            <span className="filter-by-price__separator">-</span>
                            <input 
                                type="number" 
                                name="priceTo"
                                placeholder="Do"
                                className="filter-by-price__input"
                                value={this.state.priceTo}
                                onChange={this.handleChange}
                            />
                        </fieldset>
                        <fieldset className="filter-by-category">
                            <legend className="fieldset__name">Kategorie</legend>
                            <label htmlFor="" className="fieldset__label"> 
                                <input 
                                    type="checkbox" 
                                    id="" 
                                    className="filter-by-category__input"
                                />Wszystkie
                            </label>
                            {categories.map(
                                (category, index) => {
                                    return (
                                        <label key={index} htmlFor="" className="fieldset__label"> 
                                            <input 
                                                type="checkbox" 
                                                id="" 
                                                className="filter-by-category__input"
                                            />{category}
                                        </label>
                                    )
                                }
                            )}
                        </fieldset>
                        <button 
                            type="submit"
                            className="content__filter" 
                            >Filtruj
                        </button>
                    </form>
                }
            </div>
        );
    }
}
export default FilterPanel;