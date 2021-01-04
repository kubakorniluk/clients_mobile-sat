import React, { Component, Suspense} from 'react';
import FilterPanel from './components/filterPanel/filterPanel';
import Loading from './components/loading/loading';
import './productCatalog.scss';
class ProductCatalog extends Component {
    constructor() {
        super();
        this.state = {
            productsData: [],
            filter: i => i
        }
        this.importData = this.importData.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }
    componentDidMount() {
        this.importData()
    }
    async importData() {
        const data = await import('./data/productData.json');
        this.setState(state => ({ 
           productsData: state.productsData.concat(data.default)
        }))
    }
    handleFilter(filter) {
        const { 
            priceFrom, 
            priceTo, 
            allChecked,
            categories
        } = filter;
        const setFilterQuery = (product) => {
            const priceFilter = product.price >= priceFrom && product.price <= priceTo;
            const categoriesFilter = categories.some(cat => cat.name === product.category && cat.checked);
            const priceFilterEmpty = isNaN(priceFrom) && isNaN(priceTo);
            switch(true) {
                case priceFilterEmpty && allChecked:
                    return product;
                    break;
                case !priceFilterEmpty && allChecked:
                    return priceFilter;
                    break;
                case priceFilterEmpty && !allChecked:
                    return categoriesFilter;
                    break;
                case !priceFilterEmpty && !allChecked:
                    return priceFilter && categoriesFilter; 
                    break;
                default:
                    return null;
                    break;
            }
        }
        this.setState({
            filter: product => setFilterQuery(product)
        });
    }
    render() {
        const Products = React.lazy(() => import(/* webpackPrefetch: true */'./components/products/products'));
        // const heading = (
        //     <div className="products__header">
        //         <h1 className="product-catalog__heading">Produkty</h1>
        //     </div>  
        // )
        return (
            <section className="product-catalog">
                <aside className="filter-panel">
                    <FilterPanel handleFilter={this.handleFilter}/>
                </aside>
                <div className="product-list">
                    {/* {heading} */}
                    <Suspense fallback={<Loading />}>
                        <Products products={this.state.productsData.filter(this.state.filter)}/>
                    </Suspense>
                </div>
            </section>
        );
    }
}
export default ProductCatalog;