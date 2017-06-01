import React, { Component } from 'react';

class Body extends Component {
  render() {
    return (
      <div className='component'>this is the body {this.props.data}</div>
    );
  }
}

export default Body;
