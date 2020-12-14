import React from 'react';
import PropTypes from 'prop-types';
import './products.scss';

const Products = ({
    products
}) => {
    return (
        <div className="products">
            {
                products.map((item, index) => {
                    return (
                        <div className="card" key={index}>
                            <img className="card__img" src={item.img} alt=""/>
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
    products: PropTypes.array.isRequired
}