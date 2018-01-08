import React, { Component } from 'react';

import Public from './Public';
import Private from './Private';
import Auth from '../containers/Auth';
import Nav from '../containers/Nav';

const Authenticate = () => (
  <Auth render={({authenticated})=>(
    <div>
      <Nav />
      { authenticated ? <Private /> : <Public /> }
    </div>
  )}/>
);

export default Authenticate;
