import React from 'react';
import PropTypes from 'prop-types';
import './products.scss';
const Products = ({ 
    products, 
    addToCart 
}) => {
    const renderProducts = () => {
        return (
            products.map((item) => {
                let bgImg = require(`assets/img/${item.img}`);
                return (
                    <div
                        className="card" 
                        key={item.id}
                    >   
                        <div className="img-container">
                            <div className="card__img" style={{backgroundImage: `url(${bgImg})`}}></div>
                        </div>
                        <header className="card-content">
                            <div className="card-details">
                                <h3 className="card-details__price">{`${item.price} zł`}</h3>
                                <h3 className="card-details__title">{item.name}</h3>
                            </div>
                            <button 
                                className="card-content__button"
                                onClick={() => addToCart({
                                    "id": item.id,
                                    "img": item.img,
                                    "name": item.name,
                                    "price": item.price,
                                    "quantity": 1
                                })}
                            >
                                Do koszyka
                            </button>
                        </header>
                    </div>
                )
            })
        )
    }
    const log = () => {
        const x = () => {console.log(document.querySelector('.card').innerHeight)}
        setTimeout(x, 3000)
    }
    return (
        <div className="products-wrapper">
            {renderProducts()}
            {log()}
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
    ).isRequired,
    addToCart: PropTypes.func.isRequired
}