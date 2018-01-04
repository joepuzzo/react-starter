import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { ApolloProvider } from 'react-apollo';

import App from './App.js';
import Reducer from './redux/reducers';
import { createClient } from './graphql';

const store = createStore(Reducer);
const client = createClient();

/**
 * What is this stuff?
 * <ApolloProvider /> is a comp that enables the use of graphql in our app.
 *
 * <AppContainer /> is a comp provided by react-hot-loader that handles hot loading.
 *
 * <Provider /> is a comp provided by react-redux that exposes the redux store.
 *
 * <Router /> enables react router 4 routing
 *
 * <App /> is the entrypoint to our app!
 */
 const render = Component => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <AppContainer>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </AppContainer>
    </ApolloProvider>,
    document.getElementById('root')
  );
}

render(App);

/**
 * What is this stuff?
 *
 * We use whats called HMR ( Hot Module Relplacement ) for development.
 * This allows the developer to save a file, and have the develoment server reload the site.
 * The code below allows the root component ( located in the specified dir ) to accept and
 * update from any child component.
 **/
 if ( module.hot ) {
   module.hot.accept('./App.js', () => {
     render(App)
   })
 }
