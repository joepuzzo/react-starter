import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ChooseCustomer extends Component {
  render(){
    return(
      <div>
        <h1>ChooseCustomer</h1>
        <ul>
          <li>
            <Link to="/customers/customer1">Customer1</Link>
          </li>
          <li>
            <Link to="/customers/customer2">Customer2</Link>
          </li>
          <li>
            <Link to="/customers/customer3">Customer3</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default ChooseCustomer;
