import React from 'react';
import './filterPanel.scss';
class FilterPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true,
            priceFrom: 0,
            priceTo: 0
        }
        this.togglePanel = this.togglePanel.bind(this);
    }
    togglePanel() {
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }))
    }
    filter() {
        return(null)
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
                    >{this.state.toggle ? <span>&#11167;</span> : <span>&#11165;</span>}</button>
                </div>
                {
                    <div className="content" style={this.state.toggle ? contentStyleShow : contentStyleHide}>
                        <fieldset className="filter-by-price">
                            <legend className="fieldset__name">Cena</legend>
                            <input 
                                type="number"
                                placeholder="Od" 
                                // value={this.state.priceFrom}
                                className="filter-by-price__input"
                            />
                            <span className="filter-by-price__separator">-</span>
                            <input 
                                type="number" 
                                placeholder="Do"
                                className="filter-by-price__input"
                                // value={this.state.priceTo}
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
                        <button className="content__filter" onClick={this.filter}>Filtruj</button>
                    </div>
                }
            </div>
        );
    }
}
export default FilterPanel;