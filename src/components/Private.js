import React from 'react';

import Home from '../containers/Home';

import { Switch, Route, Link, Redirect } from 'react-router-dom';

const Private = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/home" component={Home} />
      <Redirect from="/" to="/home"/>
    </Switch>
  </div>
);

export default Private;
