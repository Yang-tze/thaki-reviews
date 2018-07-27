import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Stars = props => (
  <div>
    <StarRatingComponent
      name="aggregate"
      starCount={5}
      value={5}
    />
  </div>
);

export default Stars;
