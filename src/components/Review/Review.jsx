import React, { useState } from 'react';
import Order from '../Order/Order';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Review = () => {

    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)
    const handleCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }


    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }


    return (
        <div className='review-container'>
            <div className='cart-container'>
                {
                    cart.map(product => <ReviewItem key={cart.id} product={product} handleCart={handleCart}></ReviewItem>)
                }
            </div>
            <div className='order-side'>
                <Order cart={cart} handleClearCart={handleClearCart}></Order>
                <div>
                    <Link to="/checkout"><button className='review-b'>Proceed Checkout</button></Link>
                    </div>
            </div>
            
        </div>
    );
};

export default Review;