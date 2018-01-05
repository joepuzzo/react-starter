import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import Authenticate from './components/Authenticate';
import Login from './containers/Login';
import Home from './components/Home';

const App = () => (
  <Authenticate />
);

export default App;
