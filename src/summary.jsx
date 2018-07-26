import React from 'react';
import Progress from 'react-progressbar';

const Summary = props => (
  <div>
    {/*props.score*/} out of 5 stars{/*Hover modal*/}<br></br>
    {/*link*/}5 star<Progress completed={45} color="yellow"/>%<br></br>
    {/*link*/}4 star{/*Progress bar*/}%<br></br>
    {/*link*/}3 star{/*Progress bar*/}%<br></br>
    {/*link*/}2 star{/*Progress bar*/}%<br></br>
    {/*link*/}1 star{/*Progress bar*/}%<br></br>
    <All qty={props.qty} />
  </div>
);

export default Summary;