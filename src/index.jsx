import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';
import Widget from './widget';
import Service from './service';

const store = createStore(rootReducer);

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
