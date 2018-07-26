import React from 'react';
import Promise from 'bluebird';

import Dashboard from './dashboard.jsx';
import Top from './top.jsx';

class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: 33,
      aggLoaded: false,
      allLoaded: false,
      reviews: [],
      aggregates: [],
      images: [],
      recent: [],
      query: '',
    };
  }

  componentDidMount() {
    fetch(`http://127.0.0.1:3004/reviewsummary/${this.state.product}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            aggLoaded: true,
            aggregates: result[0],
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
    fetch(`http://127.0.0.1:3004/reviews/${this.state.product}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            allLoaded: true,
            reviews: result.reviews,
            images: result.images,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    return (
      <div>
        <table>
        Service Component
          <Dashboard score={this.state.aggregates.score} qty={this.state.aggregates.qty}/>
          <Top reviews={this.state.reviews} qty={this.state.qty}/>
        See all {this.props.qty} reviews >
        {/*Write a customer review BUTTON*/}
          {/*<Right Panel
          <Images images={this.state.images} />
          <Recent recent={this.state.reviews.slice(0, 10)} />
          <Search /> */}
        </table>
      </div>
    );
  }
}

export default Service;
