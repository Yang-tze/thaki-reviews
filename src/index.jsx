import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Service from './service.jsx';
import reviews from './reducers'

const store = createStore(reviews);

ReactDOM.render(<Service store={store}/>, document.getElementById('service'));
