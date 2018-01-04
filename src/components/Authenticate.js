import React, { Component } from 'react';

import Public from './Public';
import Private from './Private';

class Authenticate extends Component {
  render(){
    return(
      <div>
        { this.props.authenticated
          ? <Private {...this.props}/>
          : <Public {...this.props}/>
        }
      </div>
    );
  }
}

/* Export the module that is to be used externally */
export default Authenticate;
