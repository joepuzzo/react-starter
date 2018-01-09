import React, { Component } from 'react';

import Public from './Public';
import Private from './Private';
import Auth from '../containers/Auth';
import Nav from '../containers/Nav';

const Authenticate = () => (
  <Auth render={({authenticated})=>(
    <div>
      <Nav />
      <hr />
      { authenticated ? <Private /> : <Public /> }
    </div>
  )}/>
);

export default Authenticate;
