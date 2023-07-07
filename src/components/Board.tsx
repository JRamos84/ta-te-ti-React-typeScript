import Square from './Square'

import { checkEndGame, checkWinner } from '../logic/board.js'
import { TURNS } from '../../constants.js'
import { useBoardContext } from '../hooks/useBoardContext.js'

interface BoardProps {
  turn: string
  score: { x: number; y: number }
  setTurn: (arg: string) => void
  setWinner: (arg: string | boolean | null) => void
  setScore: (arg: { x: number; y: number }) => void
}

const Board: React.FC<BoardProps> = ({
  setWinner,
  setTurn,
  turn,
  score,
  setScore,
}) => {
  const { board, setBoard } = useBoardContext()

  const updateBoard = (index: number): void => {
    if (board[index]) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      console.log(newWinner)
      if (newWinner === TURNS.X) {
        const updateScore = { ...score, x: score.x + 1 }
        setScore(updateScore)
      } else if (newWinner === TURNS.O) {
        const updateScore = { ...score, y: score.y + 1 }
        setScore(updateScore)
      }

      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }
  return (
    <section className="game">
      {board.map((_: string, index: number) => (
        <Square key={index} index={index} updateBoard={updateBoard}>
          {board[index]}
        </Square>
      ))}
    </section>
  )
}

export default Board
