import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { METHODS } from 'http';

import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
​
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>
)
​
Root.propTypes = {
  store: PropTypes.object.isRequired
}


class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      reviews: [],
      aggregates: [], 
    };
  }

  render() {
    return (
      <div>
        Service Component
      </div>
    );
  }
}

export default Service;