import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../containers/Login';
import About from '../components/About';

const CustomerRoutes = () => (
  <Switch>
    <Route path="/customers/:customerId/details" component={()=>(<h4>Customer Details</h4>)} />
    <Route path="/customers/:customerId/claims" component={()=>(<h4>Customer Claims</h4>)} />
  </Switch>
);

export default CustomerRoutes;
