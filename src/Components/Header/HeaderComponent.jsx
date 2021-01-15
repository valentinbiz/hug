import React from 'react';
import {Link} from 'react-router-dom';

import { ReactComponent as Logo} from '../../v.svg'

import {auth} from '../../Firebase/Firebase.utils';

import './HeaderStyle.scss'

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'> Shop</Link>
            <Link className='option' to='/shop'> Contact</Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}> Sign Out </div>
                :
                <Link className='option'to='/signIn' > Sign In </Link>
            }
        </div>
    </div>
);

export default Header;