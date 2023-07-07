import { PropsWithChildren, createContext, useState } from 'react'

type ContextType = {
  board: string[]
  setBoard: (board: string[]) => void
}

export const BoardContext = createContext<ContextType | undefined>(undefined)

export const BoardProvider = ({ children }: PropsWithChildren<{}>) => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(null))

  return (
    <BoardContext.Provider value={{ board, setBoard }}>
      {children}
    </BoardContext.Provider>
  )
}
