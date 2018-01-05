import React, { Component } from 'react';

class Customer extends Component {

  componentDidMount(){
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
          <h1>Customer Details</h1>
          <h2>Customer name: {customer.name}</h2>
        </div>
      );
    } else {
      return <span>Error!</span>
    }
  }

}

export default Customer;
