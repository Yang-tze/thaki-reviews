import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Stars from './stars.jsx';
import Summary from './summary.jsx';
import WriteButton from './writeButton.jsx';
import CustomerReviews from './customerReviews.jsx';
import All from './all.jsx';
import Images from './images.jsx';
import Recent from './recent.jsx';
import Search from './search.jsx';

import {
  selectProduct,
  fetchAggregates,
  fetchReviews,
} from './actions.jsx';

class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      aggregates: {
        score: null,
        qty: null,
      },
      reviews: [],
      images: [],
      query: '',
    }
    this.props.store.subscribe(() => {
      this.setState({
        product: this.props.store.getState().product,
        aggregates: this.props.store.getState().aggregates,
        reviews: this.props.store.getState().reviews.reviews,
        images: this.props.store.getState().reviews.images,
      });
    });
  }

  componentDidMount() {
    if (this.props.match.params.productId !== this.state.product) {
      this.props.store.dispatch(selectProduct(this.props.match.params.productId));
      this.props.store.dispatch(fetchAggregates(this.props.match.params.productId));
      this.props.store.dispatch(fetchReviews(this.props.match.params.productId));
    }
  }

  // componentDidUpdate() {
  //   console.log(this.props, this.state);
  // }

  render() {
    return (
      <div>
        <table>
        Customer reviews
        <Stars rating={this.state.aggregates.score}/>
        <Summary aggregates={this.state.aggregates} />&#129170;
        Share your thoughts with other customers
        <WriteButton />
        Top customer reviews
        <CustomerReviews reviews={this.state.reviews} images={this.state.images}/>
        <All qty={this.state.aggregates.qty}/>
        <WriteButton />
        <Images images={this.state.images} />
        <Recent reviews={this.state.reviews.reviews} images={this.state.images}/>
        <Search />
          {/* TODO: add components for alt URLS <Route exact={true} path="/:productId?" component={CustomerReviews}/> */}
        </table>
      </div>
    );
  }
}

export default Service;
