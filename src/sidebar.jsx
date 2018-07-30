import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styles from './styles.css';
import Images from './presentational/images.jsx';
import Recent from './presentational/recent.jsx';
import Search from './presentational/search.jsx';

const Sidebar = ({ reviews, images }) => (
  <div className={styles.sidebar}>
    Sidebar
    {/* <Images images={images} />
    <Recent reviews={reviews.reviews} images={images}/>
    <Search /> */}
  </div>
);

export default Sidebar;
