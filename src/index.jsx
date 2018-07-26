import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
import Service from './service.jsx';
// import reviews from './reducers'

// const store = createStore(reviews);  store={store}

ReactDOM.render(<Widget />, document.getElementById('widget'));
ReactDOM.render(<Service />, document.getElementById('service'));
