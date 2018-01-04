import { connect } from 'react-redux';

import Authenticate from '../components/Authenticate';

const mapStateToProps = state => ({
  authenticated: state.authenticated
});

export default connect(
  mapStateToProps
)(Authenticate);
