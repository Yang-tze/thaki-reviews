import React from 'react';
import Progress from 'react-progressbar';

const Summary = () => (
  <div>
    {/*props.score*/} out of 5 stars{/*Hover modal*/}<br></br>
    {/*link*/}5 star<Progress completed={45} color="yellow"/>%<br></br>
    {/*link*/}4 star{/*Progress bar*/}%<br></br>
    {/*link*/}3 star{/*Progress bar*/}%<br></br>
    {/*link*/}2 star{/*Progress bar*/}%<br></br>
    {/*link*/}1 star{/*Progress bar*/}%<br></br>
    {/* <All qty={13} /> */}
  </div>
);

export default Summary;