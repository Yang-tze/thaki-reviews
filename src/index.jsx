import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';


import rootReducer from './redux/reducers.jsx';
import Widget from './widget.jsx';
import Service from './service.jsx';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter history={history}>
//       <Route path="/:productId?" render={({ match }) => <Widget url={match} store={store} />} />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('widget')
// );

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Route path='/:productId?' render={({ match }) => <Service match={match} store={store} />} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('service')
);
