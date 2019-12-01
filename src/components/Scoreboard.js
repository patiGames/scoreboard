import React, { Component } from 'react';
import { initialState, setPoints } from '../gamePoints';
import { getGameScore } from '../gameScoreParser';

class Scoreboard extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  increasePoints(playerId) {
    this.setState(setPoints(playerId, this.state));
  }

  render() {
    return (
      <div>
        <h1>Tennis Scoreboard</h1>
        <h2 id="score">Score: {getGameScore(this.state.gamePoints).scoreCall}</h2>
        <button className="player1-scores"
                type="button"
                onClick={()=>this.increasePoints(1)}>
          Player 1 scores
        </button>
        <button className="player2-scores"
                type="button"
                onClick={()=>this.increasePoints(2)}>
          Player 2 scores
        </button>
      </div>
    );
  };
}

export default Scoreboard;
