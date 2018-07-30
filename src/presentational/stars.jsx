import React from 'react';

import StarRatingComponent from 'react-star-rating-component';

import styles from '../styles.css';

const Stars = ({ rating, qty }) => (

  <div>
    <p className={styles.dashqty}>
      <StarRatingComponent
        name="aggregate"
        starCount={5}
        value={rating}
        starColor="#ffce00"
        emptyStarColor="#f3f3f3"
      />      {qty}
    </p>
    <div className={styles.summary}>
      {rating} out of 5 stars {'\u25BE'}
    </div>
  </div>
);

// Stars.PropTypes = {
//   props.rating: PropTypes.number,
//   qty: PropTypes.number,
// };

export default Stars;
