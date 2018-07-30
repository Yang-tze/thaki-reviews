import React from 'react';

import styles from './styles.css';
import Dashboard from './presentational/dashboard.jsx';
import Share from './presentational/share.jsx';
import Top from './presentational/top.jsx';

const Main = ({ aggregates, reviews, images }) => (
  <div className={styles.main}>
      <Dashboard aggregates={aggregates} />
      <Share />   
      <Top aggregates={aggregates} reviews={reviews} images={images} />
  </div>
);

export default Main;
