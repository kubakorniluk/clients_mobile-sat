import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus.js';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus.js';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt.js';
import './cart.scss';

const Cart = ({ virtualCart, cartControl }) => {
    const renderCart = virtualCart.map(item => {
        return (
            <div className="cart-item" key={item.id}>
                <div className="preview">
                    <img 
                        src={require(`assets/img/${item.img}`)} 
                        alt=""
                        className="preview__img"
                    />
                    <div className="preview-details">
                        <h3 className="preview-details__title">{item.name}</h3>
                        <h3 className="preview-details__price">{`${item.price} zł`}</h3>
                        
                    </div>
                </div>
                <div className="quantity">
                    <h3 className="quantity__title">Ilość:</h3>
                    <div className="quantity-control">
                        <FontAwesomeIcon 
                            className="quantity-control__dec"
                            icon={faMinus}
                            onClick={() => cartControl('quantity_decrement', item)} 
                        />
                        <h3 className="quantity-control__count">{item.quantity}</h3>
                        <FontAwesomeIcon 
                            className="quantity-control__inc"
                            icon={faPlus} 
                            onClick={() => cartControl('quantity_increment', item)} 
                        />
                    </div>
                </div>
                <FontAwesomeIcon 
                    className="cart-item__delete"
                    icon={faTrashAlt}
                    onClick={() => cartControl('delete', item.id)}
                />
            </div>
        )
    });
    const totalSum = () => {
        const mapSums = virtualCart.map(i => {
            const { quantity, price } = i;
            return quantity * price;
        })
        let total = 0;
        for(let i in mapSums) { total += mapSums[i] }
        return `${total} zł`;
    }
    const renderEmptyCart = <h2 className="cart-empty">Koszyk jest pusty</h2>;
    const heading = (
        <header className="cart-heading">
            <h2 className="cart-heading__title">Razem:</h2>
            <h2 className="cart-heading__total">{totalSum()}</h2>
        </header>
    )
    return ( 
        <div className="cart">
            { (virtualCart.length) ? renderCart : renderEmptyCart }
            { heading }
        </div>
    );
}
 
export default Cart;

Cart.propTypes = {
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