import React from 'react';

const Dashboard = props => (
    <div>
      Customer Reviews{/*Bold header*/}<br></br>
      {/*Stars filled to visualize score*/}{props.qty}{/*Link to Reviews page*/}<br></br>
      {props.score} out of 5 stars{/*Hover modal*/}<br></br>
      {/*link*/}5 star{/*Progress bar*/}%<br></br>
      {/*link*/}4 star{/*Progress bar*/}%<br></br>
      {/*link*/}3 star{/*Progress bar*/}%<br></br>
      {/*link*/}2 star{/*Progress bar*/}%<br></br>
      {/*link*/}1 star{/*Progress bar*/}%<br></br>
      See all {props.qty} customer reviews<br></br>
      Share your thoughts with other customers
      {/*Write a customer review BUTTON*/}
    </div>
);

export default Dashboard;
