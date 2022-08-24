import React from 'react'
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../style/cart.css';


function Cart() {
    return (
        <div className='cart-container'>
            <h2>Shopping Cart</h2>
            <div className='cart-empty'>
                <p>Your Cart is currently empty</p>
                <div className='start-shopping'>
                    <Link to='/menu'>
                    <ArrowBackIcon/>
                    <span>Start Shopping</span>
                    </Link>
                </div>
            </div>
        </div>
        );
}

export default Cart
