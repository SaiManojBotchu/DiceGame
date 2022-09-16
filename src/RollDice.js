import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
  render() {
    return (
      <div>
        <h1>RollDice</h1>
        <Die face="one" />
        <Die face="two" />
      </div>
    );
  }
}

export default RollDice;