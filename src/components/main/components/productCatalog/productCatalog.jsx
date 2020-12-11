import React, { Suspense } from 'react';
import FilterPanel from './components/filterPanel/filterPanel'
import './productCatalog.scss';
class ProductCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: [],
            filter: filter => filter
        }
        this.importData = this.importData.bind(this);
        this.changeState = this.changeState.bind(this);
    }
    componentDidMount() {
        this.importData(this.state.filter);
    }
    componentDidUpdate(prevState) {
        if(prevState.filter !== prevState.filter) {
            this.importData(this.state.filter)
        }
    }
    importData(filter) {
        import('./data/productData.json')
        .then(json => 
            this.setState({
                productData: json.default.filter(filter)
            })
        );
    }
    changeState(x) {
        this.setState(prevState({
            productData: x(prevState.productData)
        }))
    }
    render() {
        const Product = React.lazy(() => import('./components/product/product'));
        const loading = <h1>Ładowanie produktów...</h1>

        const heading  = (
            <div className="products__header">
                <h1 className="product-catalog__heading">Produkty</h1>
            </div>  
        )
        return (
            <React.Fragment>
                <section className="product-catalog">
                    <FilterPanel  changeState={this.changeState} categories={this.state.productData.map(c => c.category)}/>
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
            </React.Fragment>
        );
    }
}
export default ProductCatalog;