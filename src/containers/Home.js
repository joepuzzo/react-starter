import { connect } from 'react-redux';

import Home from '../components/Home';

const mapStateToProps = state => ({
  role: state.role
});

export default connect(
  mapStateToProps
)(Home);
