import React from 'react';

const Review = props => (
  <div>
    {props.review.img}{props.review.username}{/*Bold header*/}<br></br>
    {props.review.rating}{props.review.title}{/*Bold header*/}<br></br>
    {props.reviews.date}Review{/*Progress bar*/}<br></br>
    {props.review.verified}Review{/*Progress bar*/}<br></br>
    {props.review.review}Review{/*Progress bar*/}<br></br>
    {props.review.helpful}found this helpful{/*Progress bar*/}<br></br>
    {/*Helpful button*/}
    {/*Not Helpful button*/}
    {/*Comment button*/}
    {/*Report abuse button*/}
  </div>
);

export default Review;
