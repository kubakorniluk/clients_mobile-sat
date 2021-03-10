import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Cart from './components/cart/cart';
import './order.scss';

class Order extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    liftUp(action, item) {
        this.props.cartControl(action, item)
    }
    render() { 
        return ( 
            <section className="order">
                <h2 className="section-heading">Twoje zamówienie</h2>
                <div className="container">
                    <Cart
                        virtualCart={this.props.virtualCart}
                        cartControl={(action, item) => this.liftUp(action, item)}
                    />
                    <div style={{display: "flex", flexBasis: '50%'}}></div>
                </div>
            </section>
        );
    }
}
 
export default Order;

Order.propTypes = {
    virtualCart: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired,
    cartControl: PropTypes.func.isRequired
}