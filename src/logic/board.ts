import { WINNER_COMBOS } from '../../constants'

export const checkWinner = (boardToCheck: string[]): string | void => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
}

export const checkEndGame = (newBoard: string[]): boolean => {
  return newBoard.every((square) => square !== null)
}
