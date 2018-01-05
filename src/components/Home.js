import React, { Component } from 'react';

import Role1 from './Role1';
import Role2 from './Role2';

import Auth from '../containers/Auth';

const Home = () => (
  <Auth render={({role})=>(
    <div>
      { role === 'role1' ? <Role1 /> : null }
      { role === 'role2' ? <Role2 /> : null }
    </div>
  )}/>
);

export default Home;
