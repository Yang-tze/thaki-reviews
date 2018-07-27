import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
} from 'redux';

import rootReducer from './reducers.jsx';
import Widget from './widget.jsx';
// import Service from './service.jsx';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Route path="/:productId?" render={({ match }) => <Widget url={match} store={store} />} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('widget')
);

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <Route path='./:productId?' render={({ match }) => <Service match={match} {...this.props} />} />
//     </BrowserRouter>,
//   </Provider>  
//   document.getElementById('service')
// );
