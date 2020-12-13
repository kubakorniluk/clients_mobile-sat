import React, { Component, Suspense} from 'react';
import FilterPanel from './components/filterPanel/filterPanel'
import './productCatalog.scss';
class ProductCatalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: []
        }
        this.importData = this.importData.bind(this);
    }
    componentDidMount() { this.importData(this.state.filter) }
    componentDidUpdate(prevState) {
        if(prevState.filter !== prevState.filter) {
            this.importData()
        }
    }
    importData(filter) {
        import('./data/productData.json')
        .then(json => 
            this.setState({
                productData: json.default
            })
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
                <FilterPanel categories={this.state.productData.map(cat => cat.category)}/>
                <div className="product-list">
                    {heading}
                    <div className="products">
                        <Suspense fallback={loading}>
                            {
                                this.state.productData.map((item, index) => { 
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