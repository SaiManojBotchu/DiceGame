import React, { Component } from 'react';

class Die extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.face}</h1>
      </div>
    );
  }
}

export default Die;