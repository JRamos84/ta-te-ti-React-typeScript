import Square from './Square'

interface ModalProps {
  winner: boolean | string | null
  resetGame: () => void
}

const WinnerModal: React.FC<ModalProps> = ({ winner, resetGame }) => {
  if (winner === null) return null
  const winnerText = winner === false ? 'Empate' : 'Gano'

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">{winner && <Square>{winner}</Square>}</header>
        <footer>
          <button onClick={resetGame}>Empecemos de nuevo!!</button>
        </footer>
      </div>
    </section>
  )
}

export default WinnerModal
