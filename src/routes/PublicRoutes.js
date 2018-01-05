import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../containers/Login';
import About from '../components/About';

const PublicRoutes = () => (
  <Switch>
    <Route path='/login' component={Login} />
    <Route path="/about" component={About} />
    <Redirect to='/login'/>
  </Switch>
);

export default PublicRoutes;
