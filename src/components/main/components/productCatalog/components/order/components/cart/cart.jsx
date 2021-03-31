import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus.js';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus.js';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt.js';
import TotalPrice from './components/totalPrice/totalPrice';
import './cart.scss';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kn: 1,
            knHuate: 1,
            knQuan: 1
        }
        this.handleInput = this.handleInput.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    handleInput(action, item, event) {
        this.setState({
            [event.target.name]: event.target.value
        },
            () => {
                this.props.cartControl(action, item, Number(this.state[event.target.name]));
            }
        );  
    }
    increment(item) {
        this.setState(prevState => ({
            [item]: Number(prevState[item]) + 1
        }))
    }
    decrement(item) {
        this.setState(prevState => ({
            [item]: Number(prevState[item]) - 1
        }))
    }
    render() {
        const { virtualCart, cartControl } = this.props;
        const renderCart = virtualCart.map(item => {
            return (
                <div className="cart-item" key={`cart-${item.id}`}>
                    <div className="preview">
                        <img 
                            src={require(`assets/img/${item.shortcut}/${item.img}`)} 
                            alt=""
                            className="preview__img"
                        />
                        <div className="preview-details">
                            <h3 className="preview-details__title">{item.name}</h3>
                            <h3 className="preview-details__price">{`${item.price.toFixed(2)} zł`}</h3>
                        </div>
                    </div>
                    <div className="quantity">
                        <h3 className="quantity__title">Ilość:</h3>
                        <div className="quantity-control">
                            <FontAwesomeIcon 
                                className="quantity-control__dec"
                                icon={faMinus}
                                onClick={() => { 
                                    cartControl('QUANTITY_DECREMENT', item) 
                                    this.decrement(item.inputName)
                                }} 
                            />
                            <input 
                                type="number" 
                                className="quantity-control__count" 
                                value={this.state[item.inputName]}
                                name={item.inputName} 
                                onChange={event => this.handleInput('QUANTITY_CHANGE', item, event)}
                            />
                            <FontAwesomeIcon 
                                className="quantity-control__inc"
                                icon={faPlus} 
                                onClick={() => { 
                                    cartControl('QUANTITY_INCREMENT', item) 
                                    this.increment(item.inputName)
                                }} 
                            />
                        </div>
                    </div>
                    <FontAwesomeIcon 
                        className="cart-item__delete"
                        icon={faTrashAlt}
                        onClick={() => { cartControl('DELETE', item.id) }}
                    />
                </div>
            )
        });
        const renderEmptyCart = <h2 className="cart-empty">Koszyk jest pusty</h2>;
        const totalPrice = <TotalPrice key="totalPrice" cartItems={virtualCart}/>;
        return ( 
            <div className="cart">
                { (virtualCart.length) ? 
                [renderCart, totalPrice] : 
                renderEmptyCart }
            </div>
        );
    }
}
 
export default Cart;

Cart.propTypes = {
    virtualCart: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            shortcut: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
            inputName: PropTypes.string.isRequired
        })
    ).isRequired,
    cartControl: PropTypes.func.isRequired
}