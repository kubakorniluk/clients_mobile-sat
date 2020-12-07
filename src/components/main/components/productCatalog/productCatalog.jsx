import React from 'react';
import FilterPanel from './components/filterPanel/filterPanel'
import Product from './components/product/product';
import './productCatalog.scss';
class ProductCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            filter: filter => filter
        }
        this.importData = this.importData.bind(this);
        this.filterByPrice = this.filterByPrice.bind(this)
    }
    componentDidMount() {
        this.importData(this.state.filter);
    }
    importData(filter) {
        import('./data/productData.json')
        .then(json => 
            this.setState({
                isLoading: false,
                data: json.default.filter(filter)
            })
        );
    }
    filterByPrice(price) {
        this.setState({
            filter: price
        })
    }
    render() {
        return (
            <React.Fragment>
                <h1 className="product-catalog__heading">Produkty</h1>
                <section className="product-catalog">
                    <FilterPanel categories={this.state.data.map(c => c.category)}/>
                    <div className="product-list">
                        {
                            this.state.data.map((item, index) => { 
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
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default ProductCatalog;