import React from 'react';

import styles from '../styles.css';
import Stars from './stars';
import Summary from './summary';
// import WriteButton from './presentational/writeButton.jsx';
// import CustomerReviews from './customerReviews.jsx';
// import All from './presentational/all.jsx';
// import Images from './presentational/images.jsx';
// import Recent from './presentational/recent.jsx';
// import Search from './presentational/search.jsx';

const Dashboard = ({ aggregates }) => (
  <div className={styles.dashboard}>
    <p className={styles.mainhead}>Customer reviews</p>
    <Stars rating={aggregates.score} qty={aggregates.qty} />
    <Summary aggregates={aggregates} />
  </div>
);

export default Dashboard;

// Customer Reviews{/*Bold header*/}<br></br>
// {/*Stars filled to visualize score*/}{props.qty}{/*Link to Reviews page*/}<br></br>
// {props.score} out of 5 stars{/*Hover modal*/}<br></br>
// {/*link*/}5 star{/*Progress bar*/}%<br></br>
// {/*link*/}4 star{/*Progress bar*/}%<br></br>
// {/*link*/}3 star{/*Progress bar*/}%<br></br>
// {/*link*/}2 star{/*Progress bar*/}%<br></br>
// {/*link*/}1 star{/*Progress bar*/}%<br></br>
// See all {props.qty} customer reviews<br></br>
// Share your thoughts with other customers
// {/*Write a customer review BUTTON*/}
