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
    importData() {
        import('./data/productData.json')
        .then(json => 
            this.setState({
                productsData: json.default
            })
        );
    }
    handleFilter(filter) {
        const { 
            priceFrom, 
            priceTo, 
            allChecked,
            categories
        } = filter;
        this.setState({
            filter: i => {
                let product = i;
                const price = product.price >= priceFrom && product.price <= priceTo 
                if(allChecked) {
                    return price;
                } else if (!allChecked) {
                    return (
                        price && categories.some(cat => cat.name === product.category && cat.checked)
                    )
                } else if ((priceFrom == 0 && priceTo == 0) && allChecked) {
                    return i
                }
            }
        });
    }
    render() {
        const Products = React.lazy(() => {
            return (
                Promise.all([
                    import('./components/products/products'),
                    new Promise(resolve => setTimeout(resolve, 750))
                ])
                .then(([moduleExports]) => moduleExports)
            );
        });
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