export const initialState = {
  gamePoints: {
    player1: 0,
    player2: 0,
  },
};

export function setScore(playerNumber, previousState) {

  const updatedGamePoints = Object.assign({}, previousState.gamePoints, {
    [`player${playerNumber}`]: previousState.gamePoints[`player${playerNumber}`] + 1
  });

  if(isDeuce(updatedGamePoints.player1, updatedGamePoints.player2)) {
    updatedGamePoints.player1 = updatedGamePoints.player2 = 3;
  }

  return {gamePoints: updatedGamePoints};
}
function isDeuce(player1Points, player2Points) {
  return player1Points === 4 && (player1Points === player2Points);
}

