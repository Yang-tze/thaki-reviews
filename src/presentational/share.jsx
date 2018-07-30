import React from 'react';

import styles from '../styles.css';
import WriteButton from './writeButton';

const Share = () => (
  <div className={styles.share}>
    Share your thoughts with other customers
    <WriteButton />
  </div>
);

export default Share;
