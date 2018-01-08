import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CustomerRoutes from '../routes/CustomerRoutes';

class Customer extends Component {

  componentDidMount(){
    console.log("HERE!!!");
    const {
      fetchCustomer,
      match
    } = this.props;
    fetchCustomer( match.params.customerId );
  }

  render(){
    const {
      fetchingCustomer,
      customer
    } = this.props;

    if( fetchingCustomer ){
      return <span>loading...</span>;
    } else if( customer ) {
      return (
        <div>
          <h1>Customer</h1>
          <h2>Customer name: {customer.name}</h2>
          <div>
            <h3>CustomerPages</h3>
            <ul>
              <li>
                <Link to={`${this.props.match.url}/details`}>Details</Link>
              </li>
              <li>
                <Link to={`${this.props.match.url}/details`}>Claims</Link>
              </li>
            </ul>
          </div>
          <CustomerRoutes />
        </div>
      );
    } else {
      return <span>Error!</span>
    }
  }

}

export default Customer;
