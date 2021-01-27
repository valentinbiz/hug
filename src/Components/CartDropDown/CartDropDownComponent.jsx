import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButtonComponent';
import CartItem from '../CartItem/CartItemComponent';

import './CartDropDownStyle.scss';

const CartDropDown = ({ cartItems}) => (
   <div className='cart-dropdown'>
       <div className='cart-items'> 
        {
            cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
        }
       </div>
       <CustomButton> Go to Checkout</CustomButton>
   </div>
);

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropDown);