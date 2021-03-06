import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Login from '../components/Login';

import { login } from '../redux/actions';

const mapDispatchToProps = dispatch => ({
  login1: () => {
    dispatch(login('role1'));
  },
  login2: () => {
    dispatch(login('role2'));
  }
});

const mapStateToProps = state => ({
  authenticated: state.authenticated
});

export default withRouter( connect(
  mapStateToProps,
  mapDispatchToProps
)(Login));
