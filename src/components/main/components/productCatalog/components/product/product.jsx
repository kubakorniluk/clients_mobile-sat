import React from 'react';
import PropTypes from 'prop-types';
import './product.scss';

const Product = ({
    img,
    name,
    price
}) => {
    return (
        <div className="card">
            <img className="card__img" src={img} alt=""/>
            <div className="content">
                <h1 className="content__title">{name}</h1>
                <h1 className="content__price">{`${price} zł`}</h1>
            </div>
        </div>
    )
}
export default Product;

Product.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}