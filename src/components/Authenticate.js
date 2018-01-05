import React, { Component } from 'react';

import Public from './Public';
import Private from './Private';
import Auth from '../containers/Auth';

const Authenticate = () => (
  <Auth render={({authenticated})=>(
    <div>
      { authenticated ? <Private /> : <Public /> }
    </div>
  )}/>
);

export default Authenticate;
