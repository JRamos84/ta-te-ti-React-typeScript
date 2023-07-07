type MyTurns = {
  X: string
  O: string
}

type MyArrayCombo = number[][]

export const TURNS: MyTurns = {
  X: '❌',
  O: '🔵',
}

export const WINNER_COMBOS: MyArrayCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 8, 7],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]
