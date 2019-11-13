import React from 'react';
import { Route } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div>
      <Route exact path='/' component={NavBar} />
      <Route path='/login' component={Login} />
      <PrivateRoute path='/friendsList' component={FriendsList} />
    </div>
  );
}

export default App;
