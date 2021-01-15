import React from 'react';

import './App.css';
import {Switch, Route} from 'react-router-dom';

import HomePage from './Pages/Homepage/HomepageComponent';
import ShopPage from './Pages/ShopPage/ShopComponent';
import Header from './Components/Header/HeaderComponent';
import SignInSignUp from './Pages/SignIn-SignUp/SignInSignUpComponent';
import {auth} from './Firebase/Firebase.utils';





class App extends React.Component {
  constructor () {
    super();

    this.state ={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
      </div>
  );
}
}
export default App;
