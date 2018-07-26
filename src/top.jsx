import React from 'react';

import Review from './review.jsx';

const Top = props => (
  <div>
    Top customer reviews{/*Bold header*/}<br></br>
    {/*link*/}<Review review={props.reviews[0]} />{/*Progress bar*/}<br></br>
    {/*link*/}<Review review={props.reviews[1]} />{/*Progress bar*/}<br></br>
    {/*link*/}<Review review={props.reviews[2]} />{/*Progress bar*/}<br></br>
  </div>
);

export default Top;
