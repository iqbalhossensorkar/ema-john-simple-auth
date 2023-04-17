import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product
    const handleAddToCart = props.handleAddToCart
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h6>{name}</h6>
            <p className='price'>Price: ${price}</p>
            <p className='seller'>Manufacturer: {seller}</p>
            <p className='rating'>Rating: {ratings} stars</p>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;