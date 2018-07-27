import React from 'react';
// import { Link, Route, Switch } from 'react-router-dom';

import {
  selectProduct,
  fetchAggregates,
} from './actions.jsx';

// import Stars from './stars.jsx';
// import Summary from './summary.jsx';
{/* <Stars rating={5} /><br></br>
<Summary />
<Link to='/'>{13}
 customer reviews</Link>
<br></br> */}

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.props.store.subscribe(() => {
      this.setState({ 
        aggregates: this.props.store.getState().aggregates,
        product: this.props.store.getState().product,
      });
    });
  }

  componentDidMount() {
    this.props.store.dispatch(selectProduct(this.props.url.params.productId));
    this.props.store.dispatch(fetchAggregates(this.props.url.params.productId));
    // this.props.store.dispatch(fetchReviews(this.props.url.params.productId));
  }

  componentDidUpdate() {
    console.log('widget state', this.props.store.getState(), this.state);
  }

  render() {
    return (
      <div>
        Widget
        {/* {console.log('widget state', this.state)} */}
      </div>
    );
  }
}

export default Widget;
