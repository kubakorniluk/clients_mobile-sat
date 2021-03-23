import React, { Component } from 'react';
import Products from './components/products/products';
import Pagination from './components/pagination/pagination';
import Order from './components/order/order';
import './productCatalog.scss';

class ProductCatalog extends Component {
    constructor() {
        super();
        this.state = {
            productsData: [],
            virtualCart: [],
            productsPerPage: 8,
            currentProductsInterval: [1, 2, 3, 4, 5, 6, 7, 8]
        }
        this.setCurrentProductsInterval = this.setCurrentProductsInterval.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.cartControl = this.cartControl.bind(this);
    }
    componentDidMount() {
        import('./data/productData.json')
        .then(data => 
            this.setState({ 
                productsData: data.default
            })
        )
    }
    setCurrentProductsInterval(currentInterval) {
        this.setState({
            currentProductsInterval: currentInterval
        });
    }
    addToCart(item) {
        const { virtualCart } = this.state;
        if(virtualCart.some(obj => obj['name'] === item.name)) { 
            this.setState({
                virtualCart: virtualCart.map((findItem, index) => {
                    if(index == virtualCart.findIndex(i => i.name === item.name)) {
                        findItem.quantity++;
                    }
                    return findItem;
                })
            })
        } else {
            this.setState(prevState => ({
                virtualCart: [...prevState.virtualCart, item]
            }));
        }
    }
    // my own redux :)
    cartControl(action, item) {
        const { virtualCart } = this.state;
        if(action && typeof action == 'string') {
            if(action == 'DELETE') {
                this.setState({
                    virtualCart: virtualCart.filter(i => i.id !== item)
                });
            } else if(action == 'QUANTITY_INCREMENT') {
                this.setState({
                    virtualCart: virtualCart.map((findItem, index) => {
                        if(index == virtualCart.findIndex(i => i.name === item.name)) {
                            findItem.quantity++;
                        }
                        return findItem;
                    })
                })
            } else if(action == 'QUANTITY_DECREMENT') {
                this.setState({
                    virtualCart: virtualCart.map((findItem, index) => {
                        if(index == virtualCart.findIndex(i => i.name === item.name)) {
                            findItem.quantity--;
                        }
                        return findItem;
                    })
                })
            } else { console.warn(`cartControl: you've tried to provide '${action}' as action. This method doesn't exist.`) }
        } else { console.warn('cartControl: you\'ve passed wrong action type.') }
    }
    render() {
        const shownProducts = this.state.productsData.filter((product, index) => {
            if(this.state.currentProductsInterval.includes(index + 1)) {
                return product;
            }
            else {return null}
        })
        return (
            <>
                <section className="product-catalog">
                    <div className="catalog-control">
                        <h2 className="catalog-control__title">Oferta</h2>
                        <Pagination 
                            data={this.state.productsData} 
                            productsPerPage={this.state.productsPerPage}
                            setCurrentProductsInterval={this.setCurrentProductsInterval}
                        />
                    </div>
                    <Products 
                        products={shownProducts}
                        addToCart={this.addToCart}
                    />
                </section>
                <Order 
                    virtualCart={this.state.virtualCart}
                    cartControl={this.cartControl}
                />
            </>
        );
    }
}
export default ProductCatalog;