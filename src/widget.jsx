import React from 'react';

import Stars from './stars.jsx';
import Summary from './summary.jsx';

const Widget = props => (
  <div>
      <Stars rating={props.rating} /><br></br>
      <Summary />
      {props.qty} customer reviews<br></br>
  </div>
);

export default Widget;
