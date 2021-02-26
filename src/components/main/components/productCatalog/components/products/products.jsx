import React from 'react';
import PropTypes from 'prop-types';
import './products.scss';
const Products = ({ products }) => {
    const renderProducts = () => {
        return (
            products.map((item) => {
                return (
                    <div className="card" key={item.id}>
                        {/* <div className="card__img" style={{backgroundImage: require(`assets/img/${item.img}`)}}>
                            <div className="overlay"></div>
                        </div> */}
                        <img className="card__img" src={require(`assets/img/${item.img}`)} alt={item.name}/>
                        <header className="card-content">
                            <h3 className="card-content__title">{item.name}</h3>
                            <h3 className="card-content__price">{`${item.price} zł`}</h3>
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