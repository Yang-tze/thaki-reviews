import React from 'react';

import styles from '../styles.css';
import Image from './image.jsx';

const Images = ({ images }) => (
  <div>
      <p  className={styles.imagehead}>Customer images</p>
      {images.map(image => <Image key={image.review_id} image={image} />)}
      See all customer images
  </div>
);

export default Images;
