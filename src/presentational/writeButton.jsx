import React from 'react';

import styles from '../styles.css';

const WriteButton = () => (
  <div className={styles.writebutton}>
    <button className={styles.button}><span className={styles.buttontext}>Write a customer review</span></button>
  </div>
);

export default WriteButton;
