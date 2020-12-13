import React from 'react';
import './product.scss';
const Product = (props) => {
    return (
        <div className="card">
            <img  className="card__img" src={props.img} alt=""/>
            <div className="content">
                <h1 className="content__title">{props.name}</h1>
                <h1 className="content__price">{props.price + " zł"}</h1>
            </div>
        </div>
    )
}
export default Product;