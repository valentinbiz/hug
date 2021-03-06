import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo} from '../../v.svg'

import {auth} from '../../Firebase/Firebase.utils';
import CartIcon from '../CartIcon/CartIconComponent';
import CartDropDown from '../CartDropDown/CartDropDownComponent';
import { selectCartHidden } from '../../Redux/Cart/Cart.Selectors';
import { selectCurrentUser } from '../../Redux/User/User.Selectors';


import './HeaderStyle.scss'

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          Shop
        </Link>
        <Link className='option' to='/shop'>
          Contact
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className='option' to='/signin'>
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {
        hidden ? null : <CartDropDown />
      }
      
    </div>
  );
  
  const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });
  
  export default connect(mapStateToProps)(Header);