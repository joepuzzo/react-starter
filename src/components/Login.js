import React, { Component } from 'react';

class Login extends Component {
  render(){
    return(
      <div>
        <h1>Login to Autumn</h1>
        <button onClick={()=>{this.props.login1()}}>Login as role1</button>
        <button onClick={()=>{this.props.login2()}}>Login as role2</button>
      </div>
    );
  }
}

export default Login;
