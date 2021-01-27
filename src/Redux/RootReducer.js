import {combineReducers} from 'redux';

import userReducer from './User/User.Reducer';
import cartReducer from './Cart/Cart.Reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});