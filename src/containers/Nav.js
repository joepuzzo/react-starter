import { connect } from 'react-redux';

import Nav from '../components/Nav';

//import { logout } from '../redux/actions';

// const mapDispatchToProps = dispatch => ({
//   logout: () => {
//     dispatch(logout());
//   }
// });

const mapStateToProps = state => ({
  role: state.role,
  user: state.user,
  authenticated: state.authenticated
});

export default connect(
  mapStateToProps,
  //mapDispatchToProps
)(Nav);
