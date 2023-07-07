import { useContext } from 'react'
import { BoardContext } from '../context/BoardContext'

export const useBoardContext = () => {
  const context = useContext(BoardContext)

  if (!context) {
    throw new Error('useThemeContext must be used inside the BoardProvider')
  }
  return context
}
