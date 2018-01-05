/**
 * Reducers
 *
 * Actions describe the fact that something happened, but don't specify how the
 * application's state changes in response. This is the job of reducers.
 *
 * Use this file ( optionally break this up into multiple files ) to define
 * your applications reducer. A reducer is exacly what you would expect it to
 * be, it takes a state and reduces it to a new state. This is a common pattern
 * used in many languages.
 */

/* We import any actions that we need to switch on here! */
import {
  DO_SOMETHING,
  LOGIN
} from '../actions';

/* You always want to define your initial state ( state when app first loads) */
const INITIAL_STATE = {
  something: 0,
  authenticated: false,
  user: null,
  fetchingCustomer: false,
  customer: { name: "FooBarBaz" }
};

/**
 * This is the actual reducer! Note how its just a simple switch that returns
 * an updated state based on the action that was recieved.
 */
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
        something: action.something + 1
      };
    case LOGIN:
      return {
        ...state,
        authenticated: true,
        role: action.role,
        user: action.role === 'role1' ? { customerId: null } :  { customerId: '1' }
      };
    default:
      return state;
  }
}
