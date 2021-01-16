import React, { PureComponent } from 'react';
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
            this.props.liftUp(currentCategory)
        }
    }
    mapCategories() {
        const { data } = this.props;
        const categories = [...new Set(data.map(item => item.category))];
        const countForEach = categories.map((category, index) => {
            return {
                id: index + 1,
                name: category,
                count: data.filter(item => item.category === category).length
            }
        });
        const allProducts = {
            id: 0, 
            name: 'wszystkie', 
            count: data.length
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
            <ul style={{listStyleType: 'none', margin:0, padding: '0 1.5em', width: '100%', }}>
                {
                    categories.map(item => 
                        <li 
                            onClick={() => this.handleCategoryUpdate(item.name)} 
                            key={item.id} 
                            style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}
                        >
                            <h3>{item.name}</h3>
                            <h3>{item.count}</h3>
                        </li>
                    ) 
                }
            </ul>  
        );
    }
}
 
export default CategoriesFilter;

CategoriesFilter.propTypes = {
    liftUp: PropTypes.func.isRequired,
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