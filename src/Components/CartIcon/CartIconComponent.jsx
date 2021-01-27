import React from 'react';
import {connect} from 'react-redux';

import { toggleCartHidden } from '../../Redux/Cart/Cart.Actions';
import { selectCartItemsCount } from '../../Redux/Cart/Cart.Selectors';

import { ReactComponent as ShoppingIcon } from '../../shopping-bag.svg';

import './CartIconStyle.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
        <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count' > {itemCount} </span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);