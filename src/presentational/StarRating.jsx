import React from 'react';

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

export default StarRating;
