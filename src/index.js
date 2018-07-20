import React from 'react';
import ReactDOM from 'react-dom'

class Service extends React.Component {
  render() {
    return (
      <div>Service Component</div>
    );
  }
}

ReactDOM.render(<Service />, document.getElementById("service"));
