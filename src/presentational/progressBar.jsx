import React from 'react';

import styles from '../styles.css';

const Filler = ({ percentage }) => {
  return <div className={styles.filler} style={{ width: `${percentage}%` }} />
};

const ProgressBar = ({ percentage, rating }) => {
  return (
    <div className={styles.progress}>
      <Filler percentage={percentage} />
    </div>
  );
};

export default ProgressBar;
