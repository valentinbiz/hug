import React from 'react';

import {Switch, Route} from 'react-router-dom';
import {auth, createUserProfileDocument} from './Firebase/Firebase.utils';
import HomePage from './Pages/Homepage/HomepageComponent';
import ShopPage from './Pages/ShopPage/ShopComponent';
import Header from './Components/Header/HeaderComponent';
import SignInSignUp from './Pages/SignIn-SignUp/SignInSignUpComponent';


import './App.css';

class App extends React.Component {
  constructor () {
    super();

    this.state ={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState(
            {
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state)
        });
      }
      else {
        this.setState({currentUser: userAuth });
      } 
    });
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
