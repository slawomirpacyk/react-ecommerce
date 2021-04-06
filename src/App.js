import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndUp from './pages/sign-in-up/sign-in-up';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/login' component={SignInAndUp} />
      </Switch>
    </div>
  );
}

export default App;
