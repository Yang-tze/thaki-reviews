import React from 'react';

import styles from '../styles.css';
// import Dashboard from './dashboard.jsx';
// import Top from './top.jsx';

class Recent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <table>
        <p className={styles.recenthead}>Most recent customer reviews</p>
        {/* <Dashboard score={this.state.aggregates.score} qty={this.state.aggregates.qty}/>
        <Top reviews={this.state.reviews} qty={this.state.qty}/>
        See all {this.props.qty} reviews >
        {/*Write a customer review BUTTON*/}
        {/*<Right Panel
        <Images images={this.state.images} />
        <Recent recent={this.state.reviews.slice(0, 10)} />
        <Search /> */}
        </table>
      </div>
    );
  }
}

export default Recent;
