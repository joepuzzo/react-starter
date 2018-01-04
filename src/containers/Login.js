import { connect } from 'react-redux';

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
