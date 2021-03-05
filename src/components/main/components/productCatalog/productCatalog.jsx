import React, { PureComponent, lazy, Suspense } from 'react';
import Pagination from './components/pagination/pagination'
import Loading from './components/loading/loading';
import { transformCategoryName } from 'helpers/transformCategoryName'
import './productCatalog.scss';

class ProductCatalog extends PureComponent {
    constructor() {
        super();
        this.state = {
            productsData: [],
            currentCategory: 'wszystkie',
            productsPerPage: 12,
            currentProductsInterval: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        }
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
        const Products = lazy(() => {
            return new Promise(resolve => {
                setTimeout(
                    () => resolve(import(/* webpackPrefetch: true */'./components/products/products')), 
                500)
            })
        });
        return (
            <section className="product-catalog">
                {/* <div className="catalog-control">
                    <h2 className="catalog-control__title">Oferta</h2>
                    <h2 className="catalog-control__count">Znaleziono {this.state.productsData.length} produkty</h2>
                    
                </div> */}
                <Suspense fallback={<Loading />}>
                    <Products products={this.state.productsData}/>
                </Suspense>
            </section>
        );
    }
}
export default ProductCatalog;