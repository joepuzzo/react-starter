/**
 * Actions
 *
 * The docs define actions as:
 * "payloads of information that send data from your application
 *  to your store. They are the only source of information for the store.
 *  You send them to the store using store.dispatch()."
 *
 * Use this file ( optionally break this up into multiple files ) to define
 * any actions that your application may need. Note you generally export two
 * things from this file. 1: a const that holds the string value that describes
 * the action, and 2: an action creater, that is responsiblef for building the
 * action itself. These are generally very simple as you can see from the
 * example below.
 */
export const DO_SOMETHING = 'DO_SOMETHING';
export function doSomething( something ){
  return {
    type: DO_SOMETHING,
    something
  }
}

export const LOGIN = 'LOGIN';
export function login( role ){
  return {
    type: LOGIN,
    role
  }
}

export const FETCH_CUSTOMER = 'FETCH_CUSTOMER';
export function fetchCustomer( customerId ){
  return {
    type: FETCH_CUSTOMER,
    customerId
  }
}
//
// export const LOGIN = 'LOGIN';
// export function login( role ){
//   return {
//     type: LOGIN,
//     role
//   }
// }
