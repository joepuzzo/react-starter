/* Import the connect function for 'hooking up' component */
import { connect } from 'react-redux';

/* Import any actions that are to be mapped */
import { doSomething } from '../redux/actions/index.js';

/* Import the component that is to be 'connected'*/
import Example from '../components/Example';

/* Define function that maps app state to props on the component */
const mapStateToProps = state => ({
  something: state.something
});

/* Define function that maps dispatch functions to props on the component */
const mapDispatchToProps = dispatch => ({
  doSomething: ( something ) => {
    dispatch(doSomething(something));
  }
});

/**
 * Finally call the connect function and export the result
 * Note: this is a very common pattern that is used a LOT in React
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
