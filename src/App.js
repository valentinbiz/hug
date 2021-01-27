import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';


import HomePage from './Pages/Homepage/HomepageComponent';
import ShopPage from './Pages/ShopPage/ShopComponent';
import Header from './Components/Header/HeaderComponent';
import SignInSignUp from './Pages/SignIn-SignUp/SignInSignUpComponent';
import CheckoutPage from './Pages/Checkout/CheckoutComponent';

import { setCurrentUser } from './Redux/User/User.Action';
import { selectCurrentUser } from './Redux/User/User.Selectors';
import { auth, createUserProfileDocument } from './Firebase/Firebase.utils';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }
      else {
        setCurrentUser(userAuth);
      } 
    });
  }
    
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUp />)} />
      </Switch>
      </div>
  );
}
}


const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
