import React from 'react';
import PropTypes from 'prop-types';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons/faSearchPlus';
import './products.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Products = ({ products }) => {
    const renderProducts = () => {
        return (
            products.map((item) => {
                let bgImg = require(`assets/img/${item.img}`);
                return (
                    <div
                        className="card" 
                        key={item.id}
                    >
                        <div className="card__img" style={{backgroundImage: `url(${bgImg})`}}>
                            <div className="overlay">
                                <FontAwesomeIcon icon={faSearchPlus} className="overlay__toggle-icon"/>
                            </div>
                        </div>
                        <header className="card-content">
                            <h3 className="card-content__title">{item.name}</h3>
                            <h3 className="card-content__price">{`${item.price} zł`}</h3>
                            <button className="card-content__button">Dodaj do zamówienia</button>
                        </header>
                    </div>
                )
            })
        )
    }
    return (
        <div className="products-wrapper">
            {renderProducts()}
        </div>
    )
}
export default Products;

Products.propTypes = { 
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        })
    ).isRequired 
}