import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { 
  selectProduct,
  fetchAggregates,
  fetchReviews,
} from './actions';

class Service extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   product: 33,
    //   reviews: [],
    //   aggregates: [],
    //   images: [],
    //   recent: [],
    //   query: '',
    // };
  }

  componentDidMount() {
    store.dispatch(selectProduct(this.props.match.params.productId));
    store.dispatch(fetchAggregates(this.props.match.params.productId));
    store.dispatch(fetchReviews(this.props.match.params.productId));
  }

  render() {
    return (
      <div>
        <table>
        Service Component
          <Route exact={true} path="/:productId?" component={CustomerReviews}/>
        </table>
      </div>
    );
  }
}

export default Service;
