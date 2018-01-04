import React, { Component } from 'react';

import Role1 from './Role1';
import Role2 from './Role2';

class Home extends Component {
  render(){
    return(
      <div>
        { this.props.role === 'role1' ? <Role1 /> : null }
        { this.props.role === 'role2' ? <Role2 /> : null }
      </div>
    );
  }
}

export default Home;
