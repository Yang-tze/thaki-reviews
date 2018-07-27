import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Stars = props => (
  <div>
    <StarRatingComponent
      name="aggregate"
      starCount={5}
      value={props.rating}
    />
  </div>
);

export default Stars;
