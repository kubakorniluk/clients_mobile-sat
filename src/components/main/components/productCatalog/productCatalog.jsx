import React, { Component, lazy, Suspense} from 'react';
import FilterPanel from './components/filterPanel/filterPanel';
import Loading from './components/loading/loading';
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
        // this.importData = this.importData.bind(this);
        this.handleFilters = this.handleFilters.bind(this);
        this.setCurrentCategory = this.setCurrentCategory.bind(this);
    }
    async componentDidMount() {
        const data = await import('./data/productData.json');
        this.setState(state => ({ 
           productsData: state.productsData.concat(data.default)
        }))
    }
    // async importData() {
    //     const data = await import('./data/productData.json');
    //     this.setState(state => ({ 
    //        productsData: state.productsData.concat(data.default),
    //        currentCategoryCount: data.length
    //     }))
    // }
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
        const arrowRight = (
            <FontAwesomeIcon 
                className='products-heading__split'
                icon={faCaretRight}
            />
        );
        const currentCategory = this.state.currentCategory[0].toUpperCase() + this.state.currentCategory.substr(1, this.state.currentCategory.length);
        const heading = (
            <header className="products-heading">
                <h2 className="products-heading__title">
                    Home {arrowRight} Produkty {arrowRight} {currentCategory}
                </h2>
            </header>
        )
        const filteredProducts = this.state.productsData.filter(i => {
            const { currentCategory} = this.state;
            const checkCategory = () => i.category == currentCategory;
            switch(true) {
                case currentCategory == 'wszystkie':
                    return i;
                    break;
                default: 
                    return checkCategory();
            }
        });
        const Products = lazy(() => import(/* webpackPrefetch: true */'./components/products/products'));
        return (
            <>
                {heading}
                <section className="product-catalog">
                    <aside className="filter-panel">
                        <FilterPanel 
                            data={this.state.productsData}
                            setCurrentCategory={this.setCurrentCategory}
                            handleFilters={this.handleFilters}
                        />
                    </aside>
                    <section className="product-list">
                        <h2 className="product-list__title">
                            {currentCategory}
                            <span className="product-list__count">({filteredProducts.length})</span>
                        </h2>
                        <Suspense fallback={<Loading />}>
                            <Products products={filteredProducts.filter(this.state.filterQuery)}/>
                        </Suspense>
                    </section>
                </section>
            </>
        );
    }
}
export default ProductCatalog;