
import React, {Component} from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import reducer from './reducers/index';

const store = createStore(reducer);

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
