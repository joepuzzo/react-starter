import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import Login from '../containers/Login';
import About from '../components/About';

const Public = ({match}) => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path='/login' component={Login} />
      <Route path="/about" component={About} />
      <Redirect from="/" to='/login'/>
    </Switch>
  </div>
);

export default Public;
