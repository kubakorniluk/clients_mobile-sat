import React, { Component, lazy, Suspense} from 'react';
import FilterPanel from './components/filterPanel/filterPanel';
import Loading from './components/loading/loading';
import transformCategoryName from 'helpers/transformCategoryName'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import './productCatalog.scss';
class ProductCatalog extends Component {
    constructor() {
        super();
        this.state = {
            productsData: [],
            filterQuery: i => i,
            currentCategory: 'wszystkie',

        }
        this.handleFilters = this.handleFilters.bind(this);
        this.setCurrentCategory = this.setCurrentCategory.bind(this);
    }
    async componentDidMount() {
        const data = await import('./data/productData.json');
        this.setState({ 
           productsData: data.default
        })
    }
    handleFilters(filter) {
        const { priceFrom, priceTo } = filter;
        const priceFilterEmpty = isNaN(priceFrom) && isNaN(priceTo);
        const setFilterQuery = (product) => {
            const priceFilter = product.price >= priceFrom && product.price <= priceTo;
            switch(true) {
                case priceFilterEmpty:
                    return product;
                    break;
                case !priceFilterEmpty:
                    return priceFilter;
                    break;
                default:
                    return null;
                    break;
            }
        }
        this.setState({
            filterQuery: product => setFilterQuery(product)
        });
    }
    setCurrentCategory(categoryName) {
        this.setState({
            currentCategory: categoryName
        })
    }
    render() {
        const filteredProducts = this.state.productsData.filter(i => {
            const { currentCategory} = this.state;
            switch(true) {
                case currentCategory == 'wszystkie':
                    return i;
                    break;
                default: 
                    return i.category == currentCategory;
            }
        });
        const applyFilters = filteredProducts.filter(this.state.filterQuery);
        const Products = lazy(() => import(/* webpackPrefetch: true */'./components/products/products'));
        return (
            <>
                {/* {heading} */}
                <section className="product-catalog">
                    <aside className="filter-panel">
                        <FilterPanel 
                            data={this.state.productsData}
                            filteredData={this.state.productsData.filter(this.state.filterQuery)}
                            setCurrentCategory={this.setCurrentCategory}
                            handleFilters={this.handleFilters}
                        />
                    </aside>
                    <section className="product-list">
                        <h2 className="product-list__title">
                            {transformCategoryName(this.state.currentCategory)}
                            <span className="product-list__count">({applyFilters.length})</span>
                        </h2>
                        <Suspense fallback={<Loading />}>
                            <Products products={applyFilters}/>
                        </Suspense>
                    </section>
                </section>
            </>
        );
    }
}
export default ProductCatalog;