import React from 'react';
// import { Link, Route, Switch } from 'react-router-dom';

import {
  selectProduct,
  fetchAggregates,
  fetchReviews,
  widgetModal,
} from './redux/actions.jsx';

import StarsDropdown from './presentational/starsDropdown.jsx';
import Summary from './presentational/summary.jsx';

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
    console.log('WidgetMounted')
  }

  onMouseOver() {
    this.props.store.dispatch(widgetModal());
    console.log('widgetMouseOver')
  }

  // componentDidUpdate() {
  //   console.log('widget state', this.props.store.getState(), this.state);
  // }

  render() {
    const blanks = (
      <div>
        <table>
        <StarsDropdown rating={0} onMouseOver={this.onMouseOver.bind(this)}/>&#129171;<br></br>
        <Summary rating={0}/>
        0 customer customer reviews
        </table>
      </div>
    );
    const aggregates = (
      <div>
        <table>
        <StarsDropdown rating={this.state.aggregates.score} onClick={console.log('onClick')} onMouseOver={this.onMouseOver.bind(this)}/>&#129171;<br></br>
        <Summary aggregates={this.state.aggregates} />
        <a href={`*/#reviews`}>{this.state.aggregates.score} customer reviews</a>
        </table>
      </div>
    );
    return this.state.aggregates ? aggregates : blanks;
  }
}

export default Widget;
