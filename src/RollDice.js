import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

const diceFaces = ["", "one", "two", "three", "four", "five", "six"];

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice1: 1,
      dice2: 1,
      isRolling: false
    }
    this.roll = this.roll.bind(this);
  }
  roll() {
    // pick 2 new rolls
    let rand1 = Math.floor(Math.random() * 6) + 1;
    let rand2 = Math.floor(Math.random() * 6) + 1;
    // set state with new rolls
    this.setState({ dice1: rand1 , dice2: rand2, isRolling: true });
    // wait one second, then set isRolling to false
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }  
  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-div">
          <Die face={diceFaces[this.state.dice1]} rolling={this.state.isRolling} />
          <Die face={diceFaces[this.state.dice2]} rolling={this.state.isRolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? 'Rolling..' : 'Roll Dice!'}
        </button>
      </div>
    );
  }
}

export default RollDice;