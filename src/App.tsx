import { useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion'
import Square from './components/Square'
import { TURNS } from '../constants.js'
import WinnerModal from './components/WinnerModal.js'
import Board from './components/Board.js'
import { useBoardContext } from './hooks/useBoardContext.js'
import MouseFollower from './components/MouseFollower.js'
import Score from './components/Score.js'

type ScoreType = {
  x: number
  y: number
}

const App: React.FC = () => {
  const [turn, setTurn] = useState<string>(TURNS.X)
  const [winner, setWinner] = useState<string | boolean | null>(null)
  const [score, setScore] = useState<ScoreType>({
    x: 0,
    y: 0,
  })
  const { setBoard } = useBoardContext()

  const resetGame = (): void => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const resetSCore = (): void => {
    setScore({
      x: 0,
      y: 0,
    })
  }

  return (
    <main className="board">
      {winner && <ConfettiExplosion />}
      <h1>Ta-Te-Ti</h1>
      <button onClick={resetGame} className="">
        Reset
      </button>
      <Board
        setWinner={setWinner}
        setTurn={setTurn}
        turn={turn}
        setScore={setScore}
        score={score}
      />
      <MouseFollower enabled={true} turn={turn} />

      <section className="turn">
        <Square isSelect={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelect={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <Score score={score} />
      <button onClick={resetSCore} className="">
        Reset Score
      </button>
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
