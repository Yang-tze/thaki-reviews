import React from 'react';

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
          Recent Reviews Component
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
