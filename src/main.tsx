import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BoardProvider } from './context/BoardContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BoardProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BoardProvider>,
)
