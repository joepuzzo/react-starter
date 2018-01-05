import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Auth from '../components/Auth';

const mapStateToProps = state => ({
  authenticated: state.authenticated,
  user: state.user,
  role: state.role
});

export default withRouter( connect(
  mapStateToProps
)(Auth));
