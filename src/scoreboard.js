export const initialState = {
  gamePoints: {
    player1: 0,
    player2: 0,
  },
};

export function setScore(playerNumber, previousState) {
  return {
    gamePoints: Object.assign({}, previousState.gamePoints, {
      [`player${playerNumber}`]: previousState.gamePoints[`player${playerNumber}`] + 1
    })
  };
}

export function getGameScore(gamePoints) {

  let scoreCall = getScoreByPoints(gamePoints.player1);
  scoreCall = scoreCall + "-";

  if (gamePoints.player1 === gamePoints.player2) {
    scoreCall = scoreCall + "all";
  } else {
    scoreCall = scoreCall + getScoreByPoints(gamePoints.player2);
  }

  return {
    scoreCall,
    winningPlayer: null,
  }
}

function getScoreByPoints(points) {
  if (points === 0)
    return "love";

  if (points === 1)
    return "15";

  if (points === 2)
    return "30";

  if (points === 3)
    return "40";

  if (points > 3)
    return "after 40";
}
