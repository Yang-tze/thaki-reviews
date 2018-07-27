import React from 'react';
// import { Link, Route, Switch } from 'react-router-dom';

import {
  selectProduct,
  fetchAggregates,
  fetchReviews,
  widgetModal,
} from './actions.jsx';

import Stars from './stars.jsx';
import Summary from './summary.jsx';

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      aggregates: {
        score: null,
        qty: null,
      },
      reviews: null,
    }
    this.props.store.subscribe(() => {
      this.setState({
        product: this.props.store.getState().product,
        aggregates: this.props.store.getState().aggregates,
        reviews: this.props.store.getState().reviews,
      });
    });
  }

  componentDidMount() {
    this.props.store.dispatch(selectProduct(this.props.url.params.productId));
    this.props.store.dispatch(fetchAggregates(this.props.url.params.productId));
    this.props.store.dispatch(fetchReviews(this.props.url.params.productId));
  }

  onMouseOver() {
    this.props.store.dispatch(widgetModal());
  }

  // componentDidUpdate() {
  //   console.log('widget state', this.props.store.getState(), this.state);
  // }

  render() {
    const blanks = (
      <div>
        <table>
        <Stars rating={0} /><br></br>
        <Summary rating={0}/>
        0 customer customer reviews
        </table>
      </div>
    );
    const aggregates = (
      <div>
        <table>
        <Stars rating={this.state.aggregates.score} />&#129171;<br></br>
        <Summary aggregates={this.state.aggregates} />
        {this.state.aggregates.score} customer reviews
        </table>
      </div>
    );
    return this.state.aggregates ? aggregates : blanks;
  }
}

export default Widget;
