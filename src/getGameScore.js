export function getGameScore(gamePoints) {

  if (isEven(gamePoints.player1, gamePoints.player2))
    return getEvenScore(gamePoints.player1);

  if (hasAPlayerWon(gamePoints.player1, gamePoints.player2))
    return getWinningScore(gamePoints.player1, gamePoints.player2);

  return getStandardScore(gamePoints.player1, gamePoints.player2);
}

function getStandardScore(player1Points, player2Points) {
  const scoreCall = `${getScoreByPoints(player1Points)}-${getScoreByPoints(player2Points)}`;
  return {
    scoreCall,
    winningPlayer: null,
  }
}

function getWinningScore(player1Points, player2Points) {
  const winningPlayer = getWinningPlayerId(player1Points, player2Points);
  const scoreCall = `Game, ${winningPlayer}`;
  return {
    scoreCall,
    winningPlayer,
  }
}

function getWinningPlayerId(player1Points, player2Points) {
  return player1Points > player2Points ? 'player1' : 'player2';
}

function getEvenScore(player1Points) {
  let scoreCall = `${getScoreByPoints(player1Points)}-all`;
  return {
    scoreCall,
    winningPlayer: null,
  }
}

function isEven(player1Points, player2Points) {
  return player1Points === player2Points;
}

function hasAPlayerWon(player1Points, player2Points) {
  return ((player1Points > 3 || player2Points > 3) && Math.abs(player1Points - player2Points) > 2);
}

function getScoreByPoints(points) {
  const SCORES = {
    0: 'love',
    1: '15',
    2: '30',
    3: '40',
    4: 'A'
  }
  return SCORES[points];
}
