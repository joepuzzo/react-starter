import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Customer from '../components/Customer';

import { fetchCustomer } from '../redux/actions';

const mapDispatchToProps = dispatch => ({
  fetchCustomer: (customerId) => {
    dispatch(fetchCustomer(customerId));
  },
});

const mapStateToProps = state => ({
  customer: state.customer
});

export default withRouter( connect(
  mapStateToProps,
  mapDispatchToProps
)(Customer));
