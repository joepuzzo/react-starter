import React from 'react';

import Nav from '../containers/Nav';
import { PrivateRoutes } from '../routes';

const Private = () => (
  <div>
    <Nav />
    <PrivateRoutes />
  </div>
);

export default Private;
