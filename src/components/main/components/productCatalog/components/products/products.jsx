import React from 'react';
import PropTypes from 'prop-types';
import './products.scss';
const Products = ({ products }) => {
    return (
        <div className="products">
            {
                products.map((item) => {
                    return (
                        <div className="card" key={item.id}>
                            <img className="card__img" src={require(`../../../../../../assets/img/${item.img}`)} alt={item.name}/>
                            <div className="content">
                                <h1 className="content__title">{item.name}</h1>
                                <h1 className="content__price">{`${item.price} zł`}</h1>
                            </div>
                        </div>
                    )
                })
            }
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