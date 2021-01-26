import React, { PureComponent } from 'react';
import { transformCategoryName } from 'helpers/transformCategoryName';
import PropTypes from 'prop-types';
import './categoriesFilter.scss';

class CategoriesFilter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            currentCategory: 'wszystkie'
        }
        this.mapCategories = this.mapCategories.bind(this)
        this.handleCategoryUpdate = this.handleCategoryUpdate.bind(this)
    }
    componentDidUpdate(prevProps, prevState) {
        const { currentCategory } = this.state;
        if(prevState.currentCategory !== currentCategory) {
            this.props.setCurrentCategory(currentCategory)
        }
    }
    mapCategories() {
        const { data, filterQuery } = this.props;
        const filteredData = data.filter(filterQuery)
        const categories = [...new Set(data.map(item => item.category))];
        const countForEach = categories.map((category, index) => {
            return {
                id: index + 1,
                name: category,
                count: filteredData.filter(item => item.category === category).length
            }
        });
        const allProducts = {
            id: 0, 
            name: 'wszystkie', 
            count: filteredData.length
        }
        return [allProducts].concat(countForEach);
    }
    handleCategoryUpdate(name) {
        this.setState({
            currentCategory: name
        })
    }
    render() {
        const categories = this.mapCategories();
        return (
            <ul className="filter-categories">
                {
                    categories.map(item => 
                        <li 
                            key={item.id} 
                            onClick={() => this.handleCategoryUpdate(item.name)}
                            className={
                                (item.name == this.state.currentCategory) 
                                ? 'filter-categories__category filter-categories__category--active' 
                                : 'filter-categories__category'
                            }
                        >
                            <h3 
                                className="category-name"
                            >
                                {transformCategoryName(item.name)}
                            </h3>
                            <h3 
                                className="category-count"
                            >
                                {item.count}
                            </h3>
                        </li>
                    ) 
                }
            </ul>  
        );
    }
}
 
export default CategoriesFilter;

CategoriesFilter.propTypes = {
    setCurrentCategory: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        })
    ).isRequired,
    filterQuery: PropTypes.func.isRequired
}