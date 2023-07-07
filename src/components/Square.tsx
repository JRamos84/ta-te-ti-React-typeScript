import { ReactNode } from 'react'

interface SquareProps {
  children: ReactNode
  isSelect?: boolean
  updateBoard?: (arg: number) => void
  index?: number
}

const Square: React.FC<SquareProps> = ({
  children,
  isSelect,
  updateBoard,
  index,
}) => {
  const className = `square ${isSelect ? 'is-selected' : ''}`
  const handleClick = () => {
    if (updateBoard) {
      if (index || index === 0) {
        updateBoard(index)
      }
    }
  }
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}

export default Square
