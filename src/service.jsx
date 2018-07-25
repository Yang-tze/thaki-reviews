import React from 'react';
import { METHODS } from 'http';

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