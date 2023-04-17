import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Review-item.css'

const ReviewItem = ({ product, handleCart }) => {
    const { img, id, quantity, price, name } = product;
    return (
        <div className='review-item'>
            <div className='left'>
                <img src={img} alt="" />
                <div className='right'>
                    <p className='title'>{name}</p>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
            </div>
            <div>
                <button onClick={() => handleCart(id)} className='delete'><FontAwesomeIcon className='trash' icon={faTrashAlt} /></button>
            </div>
        </div>
    );
};

export default ReviewItem;