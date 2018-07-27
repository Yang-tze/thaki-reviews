import React from 'react';

import Review from './review.jsx';
// import Top from './top.jsx';

class CustomerReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const reviews = (
      <div>
        <table>
        {this.props.reviews.map((review, index) =>
          <Review key={index}
          review={review} />
        )}
        {/* <Dashboard score={this.state.aggregates.score} qty={this.state.aggregates.qty}/>
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
    // console.log(this.props.reviews);
    // return this.props.reviews ? <div>Reviews</div> : <div>Reviews2</div>;
    return this.props.reviews ? reviews : '';
  }
}

export default CustomerReviews;
