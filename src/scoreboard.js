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

  const scoreCall = "love-all";

  return {
    scoreCall,
    winningPlayer: null,
  }
}

function getScoreByPoints(points) {
  if(points === 0)
    return "love";
}
