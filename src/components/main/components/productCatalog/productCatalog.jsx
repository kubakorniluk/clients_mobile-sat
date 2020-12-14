import React, { Component, Suspense} from 'react';
import FilterPanel from './components/filterPanel/filterPanel'
import './productCatalog.scss';
class ProductCatalog extends Component {
    constructor() {
        super();
        this.state = {
            productsData: [],
            productsCount: 0,
            viewedProducts: 5
        }
        this.importData = this.importData.bind(this);
    }
    componentDidMount() {
        this.importData();
        this.setState((state) => ({
            productsCount: state.productsData.length
        }))
    }
    componentDidUpdate(prevState) {
        if(prevState.filter !== prevState.filter) {
            this.importData()
        }
    }
    importData(filter) {
        import('./data/productData.json')
        .then(json => 
            this.setState(state => ({
                productsData: json.default.slice(state.productsCount, state.viewedProducts)
            }))
        );
    }
    render() {
        const Product = React.lazy(() => import('./components/product/product'));
        const loading = <h1>Ładowanie produktów...</h1>

        const heading = (
            <div className="products__header">
                <h1 className="product-catalog__heading">Produkty</h1>
            </div>  
        )
        return (
            <section className="product-catalog">
                <FilterPanel categories={this.state.productsData.map(cat => cat.category)}/>
                <div className="product-list">
                    {/* {heading} */}
                    <div className="products">
                        <Suspense fallback={loading}>
                            {
                                this.state.productsData.map((item, index) => { 
                                    return (
                                        <Product 
                                            img={item.img}
                                            name={item.name}
                                            price={item.price}
                                            key={index}
                                        />
                                    )
                                })
                            }
                        </Suspense>
                    </div>
                </div>
            </section>
        );
    }
}
export default ProductCatalog;