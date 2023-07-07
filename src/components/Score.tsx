import { TURNS } from '../../constants'
type ScoreProps = {
  score: {
    x: number
    y: number
  }
}

const Score: React.FC<ScoreProps> = ({ score }) => {
  return (
    <div className="score">
      <div className="x">{TURNS.X}</div>
      <div className="text">
        {score.x}:{score.y}
      </div>
      <div className="o">{TURNS.O}</div>
    </div>
  )
}

export default Score
