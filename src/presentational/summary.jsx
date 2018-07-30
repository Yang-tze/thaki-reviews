import React from 'react';
import PropTypes from 'prop-types';
import Progress from 'react-progressbar';

import styles from '../styles.css';
import ProgressBar from './progressBar.jsx';
import All from './all.jsx';

const Summary = ({ aggregates }) => {
  const five = Math.round(Number(aggregates.five) / Number(aggregates.qty) * 100) || 0;
  const four = Math.round(Number(aggregates.four) / Number(aggregates.qty) * 100) || 0 ;
  const three = Math.round(Number(aggregates.three) / Number(aggregates.qty) * 100) || 0;
  const two = Math.round(Number(aggregates.two) / Number(aggregates.qty) * 100) || 0;
  const one = Math.round(Number(aggregates.one) / Number(aggregates.qty) * 100) || 0;
  const stringPercent = (percent) => {
    const string = percent.toString();
    if (string.length === 3) return string;
    if  (string.length === 2) return ` ${string}`;
    return `  ${string}`;
  }
  return (
    <div className={styles.link && styles.summary}>
      {aggregates.score} out of 5 stars{/*Hover modal*/} &#129170;<br></br>
      <div className={styles.progressbar}>
        <div className={styles.rating}>5 star </div>
        <ProgressBar percentage={five} rating={5} />
        <div className={styles.percent}> {stringPercent(five)}% </div>
      </div>
      <div className={styles.progressbar}>
        <div className={styles.rating}>4 star </div>
        <ProgressBar percentage={four} rating={4} />
        <div className={styles.percent}> {stringPercent(four)}% </div>
      </div>
      <div className={styles.progressbar}>
        <div className={styles.rating}>3 star </div>
        <ProgressBar percentage={three} rating={3} />
        <div className={styles.percent}> {stringPercent(three)}% </div>
      </div>
      <div className={styles.progressbar}>
        <div className={styles.rating}>2 star </div>
        <ProgressBar percentage={two} rating={2} />
        <div className={styles.percent}> {stringPercent(two)}% </div>
      </div>
      <div className={styles.progressbar}>
        <div className={styles.rating}>1 star </div>
        <ProgressBar percentage={one} rating={1} />
        <div className={styles.percent}> {stringPercent(one)}% </div>
      </div>
      <All qty={aggregates.qty} />
    </div>
  );
};

// Summary.PropTypes = {
//   aggregates: PropTypes.object,
// };

export default Summary;
