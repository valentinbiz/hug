import './App.css';
import {Switch, Route} from 'react-router-dom';

import HomePage from './Pages/Homepage/HomepageComponent';
import ShopPage from './Pages/ShopPage/ShopComponent';



function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>
    </div>
  );
}

export default App;
