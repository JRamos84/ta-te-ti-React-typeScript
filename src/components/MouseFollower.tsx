import { useEffect, useState } from 'react'

interface MouseProps {
  enabled: boolean
  turn: string
}

const MouseFollower: React.FC<MouseProps> = ({ enabled, turn }) => {
  const [position, sePosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      sePosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: 'transparent',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px,${position.y}px)`,
        fontSize: 45,
      }}
    >
      {turn}
    </div>
  )
}

export default MouseFollower
