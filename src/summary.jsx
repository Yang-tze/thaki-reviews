import React from 'react';
import Progress from 'react-progressbar';

import All from './all.jsx';

const Summary = (props) => {
  const five = Math.round(Number(props.aggregates.five) / Number(props.aggregates.qty) * 100) || 0;
  const four = Math.round(Number(props.aggregates.four) / Number(props.aggregates.qty) * 100) || 0 ;
  const three = Math.round(Number(props.aggregates.three) / Number(props.aggregates.qty) * 100) || 0;
  const two = Math.round(Number(props.aggregates.two) / Number(props.aggregates.qty) * 100) || 0;
  const one = Math.round(Number(props.aggregates.one) / Number(props.aggregates.qty) * 100) || 0;
  return (
    <div>
      {props.aggregates.score} out of 5 stars{/*Hover modal*/}<br></br>
      {/*link*/}5 star<Progress completed={five} color="yellow"/>{five}%<br></br>
      {/*link*/}4 star<Progress completed={four} color="yellow"/>{four}%<br></br>
      {/*link*/}3 star<Progress completed={three} color="yellow"/>{three}%<br></br>
      {/*link*/}2 star<Progress completed={two} color="yellow"/>{two}%<br></br>
      {/*link*/}1 star<Progress completed={one} color="yellow"/>{one}%<br></br>
      <All qty={props.aggregates.qty} />
    </div>
  );
};

export default Summary;
