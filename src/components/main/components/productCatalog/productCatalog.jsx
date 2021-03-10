import { string } from 'prop-types';
import React, { Component, lazy, Suspense } from 'react';
import Loading from './components/loading/loading';
import Order from './components/order/order';
import './productCatalog.scss';

class ProductCatalog extends Component {
    constructor() {
        super();
        this.state = {
            productsData: [],
            virtualCart: []
        }
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
    // shouldComponentUpdate(nextProps, nextState) {
    //     if(this.state.virtualCart !== nextState.virtualCart) { return false }
    //     else { return true }
    // }
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
    cartControl(action, item) {
        const { virtualCart } = this.state;
        if(action && typeof action == 'string') {
            if(action == 'delete') {
                this.setState({
                    virtualCart: virtualCart.filter(i => i.id !== item)
                });
            } else if(action == 'quantity_increment') {
                this.setState({
                    virtualCart: virtualCart.map((findItem, index) => {
                        if(index == virtualCart.findIndex(i => i.name === item.name)) {
                            findItem.quantity++;
                        }
                        return findItem;
                    })
                })
            } else if(action == 'quantity_decrement') {
                this.setState({
                    virtualCart: virtualCart.map((findItem, index) => {
                        if(index == virtualCart.findIndex(i => i.name === item.name)) {
                            findItem.quantity--;
                        }
                        return findItem;
                    })
                })
            }
        } else { console.warn('cartControl: you passed wrong action type') }
        // this.setState({
        //     virtualCart: this.state.virtualCart.filter(i => i.id !== item)
        // });
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
            <>
                <section className="product-catalog">
                    <h2 className="catalog-control__count">Oferta</h2>
                    <Suspense fallback={<Loading />}>
                        <Products 
                            products={this.state.productsData}
                            addToCart={this.addToCart}
                        />
                    </Suspense>
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