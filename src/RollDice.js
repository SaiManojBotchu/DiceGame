import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

const diceFaces = ["", "one", "two", "three", "four", "five", "six"];
class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice1: 1,
      dice2: 1
    }
    this.roll = this.roll.bind(this);
  }
  roll() {
    let rand1 = Math.floor(Math.random() * 6) + 1;
    let rand2 = Math.floor(Math.random() * 6) + 1;
    this.setState({ dice1: rand1 , dice2: rand2 });
  }
  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-div">
          <Die face={diceFaces[this.state.dice1]} />
          <Die face={diceFaces[this.state.dice2]} />
        </div>
        <button onClick={this.roll}>Roll Dice!</button>
      </div>
    );
  }
}

export default RollDice;