import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../CustomButton/CustomButtonComponent';
import CartItem from '../CartItem/CartItemComponent';
import { selectCartItems } from '../../Redux/Cart/Cart.Selectors';
import { toggleCartHidden } from '../../Redux/Cart/Cart.Actions';

import './CartDropDownStyle.scss';

const CartDropDown = ({ cartItems, history, dispatch }) => (
   <div className='cart-dropdown'>
       <div className='cart-items'> 
        {
            cartItems.length ?
            cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />
            ))
            :
            <span className='empty-message'> Your cart is empty</span>
        }
       </div>
       <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
            }}> Go to Checkout</CustomButton>
   </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));