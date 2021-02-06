import React, { PureComponent, lazy, Suspense } from 'react';
import Pagination from './components/pagination/pagination'
import FilterPanel from './components/filterPanel/filterPanel';
import Loading from './components/loading/loading';
import { transformCategoryName } from 'helpers/transformCategoryName'
import './productCatalog.scss';

class ProductCatalog extends PureComponent {
    constructor() {
        super();
        this.state = {
            productsData: [],
            filterQuery: i => i,
            currentCategory: 'wszystkie',
            productsPerPage: 12,
            currentProductsInterval: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        }
        this.handleFilters = this.handleFilters.bind(this);
        this.setCurrentCategory = this.setCurrentCategory.bind(this);
        this.setCurrentProductsInterval = this.setCurrentProductsInterval.bind(this);
    }
    componentDidMount() {
        import('./data/productData.json')
        .then(data => 
            this.setState({ 
                productsData: data.default
            })
        )
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
        });
    }
    setCurrentProductsInterval(currentInterval) {
        this.setState({
            currentProductsInterval: currentInterval
        });
    }
    render() {
        const filteredProducts = this.state.productsData.filter(i => {
            const { currentCategory } = this.state;
            switch(true) {
                case currentCategory == 'wszystkie':
                    return i;
                    break;
                default: 
                    return i.category == currentCategory;
            }
        });
        const applyFilters = filteredProducts.filter(this.state.filterQuery);
        const shownProducts = applyFilters.filter((product, index) => {
            if(this.state.currentProductsInterval.includes(index + 1)) {
                return product;
            }
            else {return null}
        })
        const Products = lazy(() => {
            return new Promise(resolve => {
                setTimeout(
                    () => resolve(import(/* webpackPrefetch: true */'./components/products/products')), 
                500)
            })
        });
        return (
            <>
                {/* {heading} */}
                <section className="product-catalog">
                    <aside className="filter-panel">
                        <FilterPanel 
                            data={this.state.productsData}
                            filterQuery={this.state.filterQuery}
                            setCurrentCategory={this.setCurrentCategory}
                            handleFilters={this.handleFilters}
                        />
                    </aside>
                    <section className="product-list">
                        <div className="catalog-control">
                            <h2 className="catalog-control__title">
                                {transformCategoryName(this.state.currentCategory)}
                                <span className="catalog-control__count">({applyFilters.length})</span>
                            </h2>
                            <Pagination 
                                data={applyFilters} 
                                productsPerPage={this.state.productsPerPage}
                                interval={this.state.currentProductsInterval}
                                currentCategory={this.state.currentCategory}
                                setCurrentProductsInterval={this.setCurrentProductsInterval}
                            />
                        </div>
                        <Suspense fallback={<Loading />}>
                            <Products products={shownProducts}/>
                        </Suspense>
                    </section>
                </section>
            </>
        );
    }
}
export default ProductCatalog;