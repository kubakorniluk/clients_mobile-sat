import React from 'react';
import PropTypes from 'prop-types';
import './totalPrice.scss';

const TotalPrice = ({ cartItems }) => {
    const totalSum = () => {
        const mapSums = cartItems.map(i => {
            const { quantity, price } = i;
            return quantity * price;
        })
        let total = 0;
        for(let i in mapSums) { total += mapSums[i] }
        return `${total.toFixed(2)} zł`;
    }
    return (
        <div className="cart-bottom">
            <h2 className="cart-bottom__title">Razem:</h2>
            <h2 className="cart-bottom__total">{totalSum()}</h2>
        </div>
    );
}
export default TotalPrice;

TotalPrice.propTypes = {
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
}