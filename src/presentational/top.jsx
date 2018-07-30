import React from 'react';

import styles from '../styles.css';
import Review from './review.jsx';
import All from './all.jsx';
import WriteButton from './writeButton.jsx';

const Top = ({ aggregates, reviews, images }) => {
  const first = (
    reviews[0] ? <Review key={0} review={reviews[0]} /> : ''
  );
  const second = (
    reviews[1] ? <Review key={1} review={reviews[1]} /> : ''
  );
  const third = (
    reviews[2] ? <Review key={2} review={reviews[2]} /> : ''
  );
  const topReviews = (
    <div className={styles.top}>
    <hr className={styles.divider}></hr>
      <p className={styles.tophead}>Top customer reviews</p>
      {/* <table> */}
      {first}
      {second}
      {third}
      <All qty={aggregates.qty} />
      <WriteButton />
      {/* {this.props.reviews.map((review, index) =>
        <Review key={index}
        review={review} />
      )}
      </table> */}
    </div>
  );
    // console.log(this.props.reviews);
    // return this.props.reviews ? <div>Reviews</div> : <div>Reviews2</div>;
  return reviews ? topReviews : '';
};

export default Top;
