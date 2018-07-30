import React from 'react';
import PropTypes from 'prop-types';

import StarRatingComponent from 'react-star-rating-component';

import styles from '../styles.css';

const Stars = ({ rating, qty }) => (

  <div>
    <p className={styles.dashqty}>
      <StarRatingComponent
        name="aggregate"
        starCount={5}
        value={rating}
        starColor="PaleGreen"
        emptyStarColor="HoneyDew"
      />    {qty}
    </p>
  </div>
);

// Stars.PropTypes = {
//   props.rating: PropTypes.number,
//   qty: PropTypes.number,
// };

export default Stars;
