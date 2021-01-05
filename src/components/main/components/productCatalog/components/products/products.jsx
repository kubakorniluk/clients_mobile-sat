import React from 'react';
import PropTypes from 'prop-types';
import './products.scss';
const Products = ({ products }) => {
    return (
        products.map((item) => {
            return (
                <div className="card" key={item.id}>
                    <img className="card__img" src={require(`../../../../../../assets/img/${item.img}`)} alt={item.name}/>
                    <div className="card-content">
                        <h1 className="card-content__title">{item.name}</h1>
                        <h1 className="card-content__price">{`${item.price} zł`}</h1>
                    </div>
                </div>
            )
        })
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