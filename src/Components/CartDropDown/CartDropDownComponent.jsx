import React from 'react';

import CustomButton from '../CustomButton/CustomButtonComponent';

import './CartDropDownStyle.scss';

const CartDropDown = () => (
   <div className='cart-dropdown'>
       <div className='cart-items' />
       <CustomButton> Go to Checkout</CustomButton>
   </div>
);

export default CartDropDown;