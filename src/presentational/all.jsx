import React from 'react';

import styles from '../styles.css';

const All = ({ qty }) => (
  <div className={styles.link}>
    See all {qty} customer reviews {'\u25B8'}
  </div>
);

export default All;
