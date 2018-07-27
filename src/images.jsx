import React from 'react';

import Image from './image.jsx';

const Images = ({ images }) => (
  <div>
    <table>
      Customer images
      {images.map(image => <Image key={image.review_id} image={image} />)}
      See all customer images
    </table>
  </div>
);

export default Images;
