import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import { auth, createUserProfileDocument } from './Firebase/Firebase.utils';
import HomePage from './Pages/Homepage/HomepageComponent';
import ShopPage from './Pages/ShopPage/ShopComponent';
import Header from './Components/Header/HeaderComponent';
import SignInSignUp from './Pages/SignIn-SignUp/SignInSignUpComponent';
import { setCurrentUser } from './Redux/User/User.action';


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
        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUp />)} />
      </Switch>
      </div>
  );
}
}


const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
