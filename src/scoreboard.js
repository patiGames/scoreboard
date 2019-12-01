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

  const winningPlayer = getWinningPlayer(gamePoints);
  let scoreCall;

  if (isEven(gamePoints.player1, gamePoints.player2)) {
    scoreCall = `${getScoreByPoints(gamePoints.player1)}-all`;
  } else if (hasAPlayerWon(gamePoints.player1, gamePoints.player2)) {
    scoreCall = `Game, ${winningPlayer}` ;
  } else {
    scoreCall = `${getScoreByPoints(gamePoints.player1)}-${getScoreByPoints(gamePoints.player2)}`;
  }

  return {
    scoreCall,
    winningPlayer,
  }
}

function isEven(pointsPlayer1, pointsPlayer2) {
  return pointsPlayer1 === pointsPlayer2;
}

function hasAPlayerWon(pointsPlayer1, pointsPlayer2) {
  return ((pointsPlayer1 > 3 || pointsPlayer2> 3) && Math.abs(pointsPlayer1 - pointsPlayer2) > 2);
}

function getWinningPlayer(gamePoints) {
  if (isEven(gamePoints.player1, gamePoints.player2)) {
    return "";
  }

  return Object.keys(gamePoints).reduce((player1, player2) => gamePoints[player1] > gamePoints[player2] ? player1 : player2);
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
    return "A";
}
