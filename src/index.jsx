import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import store from './redux/store';
import Widget from './widget';
import Service from './service';


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
  document.getElementById('service'),
);
