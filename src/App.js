import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Authenticate from './containers/Authenticate';
import Login from './containers/Login';

const App = () => (
  <main>
    <Route path="/" component={Authenticate} />
  </main>
);

export default App;
