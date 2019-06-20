
import React, {Component} from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import reducer from './reducers/index';

const store = createStore(reducer, undefined, applyMiddleware(thunk));

class Setup extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Setup;
