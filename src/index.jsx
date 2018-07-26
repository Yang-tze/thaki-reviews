import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import reducers from './reducers';
import Widget from './widget';
import Service from './service';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Widget />
  </Provider>,
  document.getElementById('widget')
);

ReactDOM.render(
  <Provider store={store}>
    <Service />
  </Provider>,
  document.getElementById('service')
);
