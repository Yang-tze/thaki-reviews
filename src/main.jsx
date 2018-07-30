import React from 'react';

import styles from './styles.css';
import Dashboard from './presentational/dashboard';
import Share from './presentational/share';
import Top from './presentational/top';

const Main = ({ aggregates, reviews, images }) => (
  <div className={styles.main}>
      <Dashboard aggregates={aggregates} />
      <Share />   
      <Top aggregates={aggregates} reviews={reviews} images={images} />
  </div>
);

export default Main;
