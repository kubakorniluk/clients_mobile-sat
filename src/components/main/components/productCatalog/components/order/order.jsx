import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import OrderForm from './components/orderForm/orderForm';
import Cart from './components/cart/cart';
import './order.scss';

class Order extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    liftUp(action, item, event) {
        this.props.cartControl(action, item, event)
    }
    render() { 
        return ( 
            <section className="order">
                <h2 className="section-heading">Twoje zamówienie</h2>
                <div className="container">
                    <Cart
                        virtualCart={this.props.virtualCart}
                        cartControl={(action, item, event) => this.liftUp(action, item, event)}
                    />
                    <OrderForm virtualCart={this.props.virtualCart}/>
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
            quantity: PropTypes.number.isRequired,
            inputName: PropTypes.string.isRequired
        })
    ).isRequired,
    cartControl: PropTypes.func.isRequired
}